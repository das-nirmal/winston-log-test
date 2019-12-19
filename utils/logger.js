const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger;

/*
if (process.env.production) {
    const logger = new winston.transports.Papertrail({
        host: 
    })
}

module.exports = {
    info: function (msg) {
        console.log(`[INFO] - ${msg}`);
    },

    error: function () {
        console.error(`[INFO] - ${msg}`);
    }
};
*/
