const { readEvents } = require("../helpers");

async function listController(req, res, next) {
  try {
    const events = await readEvents();

    return res.send({
      status: "ok",
      data: events,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = listController;
