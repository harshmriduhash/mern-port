import * as APIUTIL from '../util/blog_util';

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const RECEIVE_NEW_BLOG = 'RECEIVE_NEW_BLOG';
export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';

const receiveBlogPosts = data => {
    return {
        type: RECEIVE_BLOGS,
        data
    };
};

const receiveNewBlog = data => {
    return {
        type: RECEIVE_NEW_BLOG,
        data
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_BLOG_ERRORS,
        errors
    };
};

export const fetchBlogs = () => dispatch => {
    return APIUTIL.getBlogs()
        .then(blogs => dispatch(receiveBlogPosts(blogs)))
        .catch(err => dispatch(receiveErrors(err)))
}; 

export const createNewBlog = data => dispatch => {
    return APIUTIL.createBlog(data)
        .then(blog => dispatch(receiveNewBlog(blog)))
        .catch(err => dispatch(receiveErrors(err)))
};

