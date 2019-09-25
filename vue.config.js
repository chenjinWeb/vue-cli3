module.exports = {
    baseUrl:'./',
    devServer: {
        port: 4100,
        proxy: {
            '/api': {
                target: 'http://192.168.100.117:8085',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
            },
        }
    },
    lintOnSave:false
};
