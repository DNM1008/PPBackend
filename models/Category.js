import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  carTrim: {
    type: mongoose.Types.ObjectId,
    ref: "CarTrim",
  },
});

const Category = mongoose.model("Catergory", categorySchema);

export default Category;
