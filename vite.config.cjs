const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        portfolio: resolve(__dirname, 'portfolio/index.html'),
      },
    },
  },
};