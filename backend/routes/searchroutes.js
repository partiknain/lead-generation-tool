const router = require("express").Router();

router.get("/:domain", async (req, res) => {

  const domain = req.params.domain;

  const data = {
    data: {
      emails: [
        {
          first_name: "John",
          last_name: "Doe",
          value: `john@${domain}`,
          position: "Software Engineer",
          linkedin: "https://linkedin.com/in/johndoe"
        },
        {
          first_name: "Sarah",
          last_name: "Smith",
          value: `sarah@${domain}`,
          position: "HR Manager",
          linkedin: "https://linkedin.com/in/sarahsmith"
        },
        {
          first_name: "Mike",
          last_name: "Brown",
          value: `mike@${domain}`,
          position: "Marketing Head",
          linkedin: "https://linkedin.com/in/mikebrown"
        }
      ]
    }
  };

  res.json(data);

});

module.exports = router;