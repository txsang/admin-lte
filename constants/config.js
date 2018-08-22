const env = process.env || {}; // eslint-disable-line no-process-env

[
  'NODE_ENV',
  'APP_PORT',
  'API_URL'
].forEach((name) => {
  if (!env[name]) {
    console.log(`Environment variable ${name} is missing, use default instead.`);
  }
});

const config = {
  ENV: env.NODE_ENV || 'development',
  staticURL: env.STATIC_URL || 'http://localhost:9000',
  API_URL: env.API_URL || 'http://localhost:9000',
  API_GOV: env.API_GOV || 'http://localhost:9000',
  API_GOV_KEY: env.API_GOV_KEY || 'http://localhost:9000',
  PORT: Number(env.APP_PORT || 9000)
};

module.exports = config;
