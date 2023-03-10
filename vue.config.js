module.exports = {
    devServer : {
        proxy : {
            '^/api' : {
                target : "http://localhost:5000", 
                changeOrigin : true, 
                logLevel : "denug", 
                pathRewrite : { '^/api': '/' }
            }
        }
    }
}