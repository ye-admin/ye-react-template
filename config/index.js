module.exports = {
    version: '1.0.0',
    dev: {
        mode: 'development',
        devtool: 'eval-source-map',
        baseURL: 'http://localhost:5050/server'
    },
    live: {
        mode: 'production',
        devtool: false,
        baseURL: 'https://ye06.vip/server'
    }
};