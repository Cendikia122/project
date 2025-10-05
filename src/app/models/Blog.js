import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    dateIcon: { type: String, default: "far fa-calendar-alt" },
    author: { type: String, required: true },
    authorIcon: { type: String, default: "far fa-user-circle" },
    title: { type: String, required: true },
    text: { type: String, required: true },
    btnText: { type: String, default: "Read More" },
    btnIcon: { type: String, default: "fas fa-angle-right" },
    thumbFull: { type: String, required: true },
    thumb: { type: String, required: true },
    animationDelay: { type: String, default: "300ms" },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
