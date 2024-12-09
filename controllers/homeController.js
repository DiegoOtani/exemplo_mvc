const HomeModel = require('../models/homeModel');

exports.index = (req, res) => {
  const name = req.query.name;

  const message = HomeModel.getMessageFromHome(name);

  res.render('home', { message });
};
