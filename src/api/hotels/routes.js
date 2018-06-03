module.exports = function(app) {
  var controller = require('./controller');

  app.route('/api/hotels').get(controller.getHotels);
  app.route('/api/hotels/:id').get(controller.getHotel);
};
