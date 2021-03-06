require('dotenv').config()

module.exports = {
    postgresql: {
        host: process.env.DATABASE_IP,
        name: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    },
    facebook: {
        id: process.env.FACEBOOK_APPID,
        key: process.env.FACEBOOK_KEY
    },
    sessionSecret: process.env.SESSION_SECRET,
    secretKey: process.env.SECRET_KEY,
    hostIP: process.env.HOST_IP,
    frontEndHost: process.env.FRONT_END_HOST,
    backEndHost: process.env.BACK_END_HOST,
    domains: process.env.DOMAINS
}