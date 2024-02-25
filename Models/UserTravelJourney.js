const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserTravelJourneySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  transitInfo: {
    type: Schema.Types.ObjectId,
    ref: "TransitInfo",
    required: true
  }
});

module.exports = mongoose.model("UserTravelJourney", UserTravelJourneySchema);
