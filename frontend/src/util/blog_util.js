import axios from 'axios';

export const createBlog = blogData => {
    return axios.post('/api/blogs/blog', blogData)
};

export const getBlogs = () => {
    return axios.get('/api/blogs')
};