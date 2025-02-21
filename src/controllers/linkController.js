const Link = require("../models/linkModel");

const linkController = {
  index: (req, res) => {
    res.render("index");
  },

  profile: (req, res) => {
    const username = req.params.username;
    const links = [
      { name: "Github", url: "https://github.com" },
      { name: "Likedin", url: "https://linkedin.com" },
      { name: "Portifolio", url: "https://meuportifolio.com" },
    ];
    res.render("profile", { username, links });
  },
};
