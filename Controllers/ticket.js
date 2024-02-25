const {
  getTicket,
  addTicket,
  updateTicket,
  resetTickets,
  getTickets
} = require("../Services/ticket");

module.exports = {
  getTicket: async (req, res, next) => {
    try {
      const ticket = await getTicket(req, res, next);
      return res.status(200).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  },


  getTickets: async (req, res, next) => {
    try {
      const ticket = await getTickets(req, res, next);
      return res.status(200).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  },

  addTicket: async (req, res, next) => {
    try {
      console.log("🚀 ~ addTicket: ~ ticket:")
      const ticket = await addTicket(req, res, next);
      return res.status(200).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  },

  updateTicket: async (req, res, next) => {
    try {
      const ticket = await updateTicket(req, res, next);
      return res.status(404).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  },

  resetTickets: async (req, res, next) => {
    try {
      const ticket = await resetTickets(req, res, next);
      return res.status(404).json({ data: ticket });
    } catch (error) {
      next(error);
    }
  },
};
