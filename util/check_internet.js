module.exports = {
    checkInternet: function (cb) {
        require('dns').lookup('google.com', function(err) {
            if(err && err.code === 'ENOTFOUND') {
                cb(false)
            } else {
                cb(true)
            };
        });
    },
}