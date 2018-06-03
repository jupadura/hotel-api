const hotelRoutes = require('./hotels/routes');

module.exports = app => {
    hotelRoutes(app);
};
