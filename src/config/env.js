require('dotenv').config();

const { get } = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATCH: get('PUBLIC_PATCH').default('public').asString()
}

module.exports = {
    envs
}