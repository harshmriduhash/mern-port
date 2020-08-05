module.exports = process.env.NODE_ENV === 'production' ?
    ({ bucket: 'tarik-portfolio-prod'}) : ({ bucket: 'tarik-portfolio-dev' });