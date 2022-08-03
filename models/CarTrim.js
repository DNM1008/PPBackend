import mongoose from "mongoose";

const carTrimSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});

const CarTrim = mongoose.model("CarTrim", carTrimSchema);

export default CarTrim;
