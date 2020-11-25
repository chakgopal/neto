const { NetoAPI } = require("neto-api");

const mySite = new NetoAPI({
  url: "https://nationalplus.neto.com.au",
  key: "hJ1y5A8OloLxtdTsC5piDdjpfjdavZuG",
  user: "webdev" // optional
});

exports.add_a_product = (req, res) => { 
let new_item = req.body;
console.log(req.body);
mySite.item
  .add(new_item)
  .exec()
  .then(response => {
    console.log(response);
  })
  .catch(err => console.log(err));

  };