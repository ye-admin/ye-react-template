module.exports = {
    version: '1.0.0',
    dev: {
        mode: 'development',
        devtool: 'eval-source-map',
        proxy: 'http://localhost:5050'
    },
    live: {
        mode: 'production',
        devtool: false,
        proxy: 'https://ye06.vip'
    }
};