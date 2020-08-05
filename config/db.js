module.exports = process.env.NODE_ENV === 'production' ?
    require('./keys_prod.js').mongoURI : 'mongodb://localhost:27017/portfolio';