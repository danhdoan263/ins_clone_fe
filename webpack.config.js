const path = require('path');

module.exports = {
    // configuration options for how webpack resolves modules
    resolve: {
        alias: {
            // add as many aliases as you like! 
            "@components": path.resolve(__dirname, 'src/components')
        }
    }
    // ... rest of your config
}