const express = require('express');

//AWS SDK
const AWS = require('aws-sdk');

// Keys for prod and dev
const keys = require('../../config/keys');
const awsBucket = require('../../config/bucket');

const BUCKET_NAME = awsBucket.bucket;
const IAM_USER_KEY = keys.awsAccessKey;
const IAM_USER_SECRET = keys.awsSecretAccessKey;

// Blog validations and schema
const validateBlogInput = require('../../validation/blog');
const Blog = require('../../models/Blog');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));

router.get('/', (req, res) => {
    Blog.find()
        .sort({ date: -1 })
        .then((blogs) => res.json(blogs))
        .catch((err) => res.status(404).json({ notasksfound: 'No blogs found', err }));
})

router.post('/blog', (req, res) => {
    const { errors, isValid } = validateBlogInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    // This function exists because we need to first check in the uploadblog function
    // If the user attached a file to the post request. That way we can know whether
    // or not we can send the file to AWS, or if we can just write the new data object in 
    // mogno and say the location url field to null. 
    const createBlog = (boolean, data, body) => {
        let location; 

        // The boolen paramter just allows you to declare whether or not a file was attached
        if (boolean) {
            location = data.locationURL
        } else {
            location = undefined
        }

        const newBlog = new Blog({
            title: body.title,
            owner: body.ownerId,
            description: body.description,
            quote: body.quote,
            authorQuote: body.authorQuote,
            locationUrl: location,
        });
        newBlog.save()
            .then((blog) => res.json(blog))
            .catch(err => res.json(err))
    };
    // On a successful response check if there is anything to upload
    const uploadBlog = (file) => {
        const { body } = req;

        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME
        });

        let params;

        // This is allowing us to define whether or not we have a file in our params
        // If there is no file we want to make it undefined so we dont chat with
        // AWS s3
        if (file) {
            params = {
                Bucket: BUCKET_NAME,
                Key: file.name,
                Body: file.data
            };
        } else {
            params = undefined;
        }

        if (params === undefined) {
            createBlog(false, undefined, body);
        } else {
            // Callback to return the locationUrl from AWS
            s3bucket.upload(params, (err, data) => {
                if (err) {
                    console.log('error in callback');
                    console.log(err);
                }
                console.log('success');


                //If Successful create a new blog post in mongoDB;
                createBlog(true, data, body);
            });
        }
    };

    uploadBlog(req.body.file);
});

module.exports = router;