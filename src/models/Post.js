import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// export default mongoose.model("Post", postSchema);
// ✅ Use existing model if it exists, otherwise create a new one
export default mongoose.models.Post || mongoose.model("Post", postSchema);
