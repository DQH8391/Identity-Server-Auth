import mongoose from "mongoose";

const authCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expiresAt: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("authorizeCode", authCodeSchema);
