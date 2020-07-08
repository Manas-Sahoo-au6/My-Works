const Interpreter = require("../model/Interpretor");
module.exports = (req, res, next) => {
  const details = [{}];

  if (req.body.expertise) details[0].Expertise = req.body.expertise;
  if (req.body.background) details[0].Background = req.body.background;
  if (req.body.language) details[0].language = req.body.language;
  if (req.body.region) details[0].region = req.body.region;
  console.log(details);
  Interpreter.find(...details)
    .exec()
    .then((result) => {
      if (result.length > 0) {
        console.log({
          message: `Succesful search,Found ${result.length} matching interpretors`,
          details: result,
        });
      }
      return result
    })
    .then((result) => {
      req.details = result;
      req.length = result.length;
      next();
    })
    .catch((err) => console.log({ error: err.message }));
};
