"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Apple",
          email: "apple@apple.com",
          password: bcrypt.hashSync("apple", 10),
        },
        {
          name: "Banana",
          email: "banana@banana.com",
          password: bcrypt.hashSync("banana", 10),
        },
        {
          name: "Coco",
          email: "coco@coco.com",
          password: bcrypt.hashSync("coco", 10),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
