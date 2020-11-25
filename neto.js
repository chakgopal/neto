const { NetoAPI } = require("neto-api");

const mySite = new NetoAPI({
  url: "https://nationalplus.neto.com.au",
  key: "hJ1y5A8OloLxtdTsC5piDdjpfjdavZuG",
  user: "webdev" // optional
});

mySite.item
  .add({ SKU: "test22" })
  .exec()
  .then(response => {
    console.log(response);
  })
  .catch(err => console.log(err));