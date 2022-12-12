"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hogwarts",
      [
        {
          name: "Gryffindor",
          founder: "Godric Gryffindor",
          members: "Albus Dumbledore, Minerva McGonagall, Hermione Granger",
          symbol:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fgryffindor-logo%2F&psig=AOvVaw13YzYiYbQHKo0W0s6A1t2Z&ust=1670937045112000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDIoNqT9PsCFQAAAAAdAAAAABAJ",
        },
        {
          name: "Slytherin",
          founder: "Salazar Slytherin",
          members: "Severus Snape, Draco Malfoy, Tom Riddle",
          symbol:
            "Imagehttps://w7.pngwing.com/pngs/546/868/png-transparent-slytherin-house-garri-potter-hogwarts-school-of-witchcraft-and-wizardry-harry-potter-literary-series-embroidered-patch-9-3-4-harry-potter-emblem-logo-helga-hufflepuff-thumbnail.pngURL",
        },
        {
          name: "Ravenclaw",
          founder: "Rowina Ravenclaw",
          members:
            "Garrick Ollivander, Sybil Trewlawney, Cho Chang, Luna Lovegood",
          symbol:
            "https://i.pinimg.com/736x/d0/57/d0/d057d0f47b998653b6db4dffc574cb64.jpg",
        },
        {
          name: "Hufflepuff",
          founder: "Helga Hufflepuff",
          members: "Newton Scamander, Pormona Sprout, Cedric Diggory ",
          symbol:
            "https://i.pinimg.com/736x/06/34/ca/0634ca00556e9bb17d5f27efc119be74--cleaning-cloths-crests.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hogwarts", null, {});
  },
};
