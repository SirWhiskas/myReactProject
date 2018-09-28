import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({ dsn: 'https://12c78002fa5a4eaa9eeda102631713f7@sentry.io/1288393' });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}