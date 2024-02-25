const Ticket = require("../Models/Ticket");

module.exports = {
  getTicket: async (req, res) => {
    const { id } = req.params;
    console.log("🚀 ~ getTicket: ~ id:", id);
    const ticket = await Ticket.findById(id).exec();
    return ticket;
  },

  getTickets: async (req, res) => {
    const { status } = req.query;
    let filters = {};
    if (status) {
      filters.status = status;
    }
    const tickets = await Ticket.find(filters).exec();
    return tickets;
  },

  addTicket: async (req, res) => {
    console.log("🚀 ~ addTicket: ~ body:", req.body);
    const ticket = new Ticket(req.body);
    return ticket.save();
  },

  updateTicket: async (req, res) => {},

  resetTickets: async (req, res) => {},
};
