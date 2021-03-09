const withImages = require('next-images');

module.exports = withImages({
  target: 'serverless',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/klemire/image/upload/',
  },
});
