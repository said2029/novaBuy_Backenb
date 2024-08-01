const { default: mongoose } = require("mongoose");

const attirbutesShcema = mongoose.Schema(
  {
    name: { type: String, required: true },
    option: { type: String, defualt: "dropdwon", required: true },
    values: [{ name: String, publiched: Boolean }],
    published: { type: Boolean, defualt: true },
  },
  { timestamps: true }
);

const Attribute_md = mongoose.model("attributes", attirbutesShcema);

module.exports = Attribute_md;
