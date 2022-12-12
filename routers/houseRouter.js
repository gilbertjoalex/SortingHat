const Router = require("express").Router;
const Houses = require("../models").hogwarts;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allHouses = await Houses.findAll();
    res.json(allHouses);
  } catch (e) {
    console.log(e.message, "getAllHouseError");
    next(e);
  }
});

module.exports = router;
