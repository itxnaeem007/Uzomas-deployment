const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'Luxury Ledger',
        titleDescription: 'Market',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
