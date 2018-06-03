const db = require('./data');

exports.getHotels = ({ query: { name, stars }}, response) => {
    const hotels = db.filter(hotel =>
        (name || stars) &&
        (!name || new RegExp(name, 'gi').test(hotel.name)) &&
        (!stars || new RegExp(hotel.stars, 'gi').test(stars))
    );
    response.send(hotels || []);
};

exports.getHotel = ({ params: { id }}, response) => {
    const hotel = db.find(hotel => hotel.id === id);
    response.send(hotel || {});
};
