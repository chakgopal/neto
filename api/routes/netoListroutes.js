module.exports = (app) => {
  const  netoList= require('../controllers/addItemController');
  // bookList Routes
  app.route('/addItems')
    .post(netoList.add_a_product);
};