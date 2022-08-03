import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  totalPrice: Number
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
