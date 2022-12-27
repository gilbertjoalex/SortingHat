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
            "https://1000logos.net/wp-content/uploads/2021/11/Gryffindor-Logo-768x432.png",
          description:
            "To be in Gryffindor, you're the type of person who likes to stand up for the little guy, challenges authority, has a tendency to act first and think later, is known as a class clown and takes board games very seriously.",
          attribute: "Brave",
          wolf: "Without Regret",
        },
        {
          name: "Slytherin",
          founder: "Salazar Slytherin",
          members: "Severus Snape, Draco Malfoy, Tom Riddle",
          symbol:
            "https://www.redwolf.in/image/cache/catalog/stickers/harry-potter-slytherin-crest-sticker-india-700x700.jpg",
          description:
            "If the Sorting Hat placed you in this noble house, then you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you're the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn't let anyone see their soft side.",
          attribute: "Best",
          wolf: "To Be Right",
        },
        {
          name: "Ravenclaw",
          founder: "Rowina Ravenclaw",
          members:
            "Garrick Ollivander, Sybil Trewlawney, Cho Chang, Luna Lovegood",
          symbol:
            "https://www.redwolf.in/image/cache/catalog/stickers/harry-potter-ravenclaw-crest-sticker-india-700x700.jpg",
          description:
            "The Sorting Hat would only put you in this house if you demonstrated excellent wisdom, wit and a skill for learning. Ravenclaws are often known for being quite eccentric and most of the great wizarding inventors and innovators have come from this house. We can imagine that you would get to sit up in Ravenclaw Tower, while surveying the excellent views, if you're the type of person who analyses everything, is an overachiever, can be described as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts.",
          attribute: "Wize",
          wolf: "To Be Remembered",
        },
        {
          name: "Hufflepuff",
          founder: "Helga Hufflepuff",
          members: "Newton Scamander, Pormona Sprout, Cedric Diggory ",
          symbol:
            "https://www.redwolf.in/image/cache/catalog/stickers/harry-potter-hufflepuff-crest-sticker-india-700x700.jpg",
          description:
            "There is an idea that Hufflepuffs are the least clever of all Hogwarts students - but that is not true. Hufflepuffs are just the most humble of all the houses and don't feel the need to shout about their achievements in the same way as the others.  If you were lucky enough to be sorted into this house, we can imagine you're the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks.",
          attribute: "Patient",
          wolf: "Without Worry",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hogwarts", null, {});
  },
};
