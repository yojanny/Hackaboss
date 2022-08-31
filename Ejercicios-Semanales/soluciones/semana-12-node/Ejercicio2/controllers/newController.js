const { saveEvent } = require("../helpers");
const joi = require("joi");

const newEventSchema = joi.object({
  date: joi
    .date()
    .required()
    .error(
      new Error("Es necesario especificar un campo date con formato de fecha")
    ),
  event: joi
    .string()
    .max(255)
    .required()
    .error(
      new Error(
        "Es necesario especificar un campo evento con un máximo de 255 caractere"
      )
    ),
  secret: joi.any(),
});

async function newController(req, res, next) {
  try {
    joi.assert({ ...req.body }, newEventSchema);

    const { date, event } = req.body;

    const updatedList = await saveEvent({ date, event });

    res.send({
      status: "ok",
      data: updatedList,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = newController;
