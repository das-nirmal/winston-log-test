const winston = require('winston');
require('winston-papertrail').Papertrail;

if (process.env.production) {
    // const logger = new winston.transports.Papertrail({
    //     host: 
    // })
}

module.exports = {
    info: function (msg) {
        console.log(`[INFO] - ${msg}`);
    },

    error: function () {
        console.error(`[INFO] - ${msg}`);
    }
};
