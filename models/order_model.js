const { default: mongoose } = require("mongoose");

// schema Order
const orderSchema = mongoose.Schema({
  InvocId:{type:String},
  customerId: { type: mongoose.Types.ObjectId, ref: "user",required:true },
  totalAmount: String,
  items: [
    {
      productId: {type:mongoose.Types.ObjectId,ref:"product"},
      quantity: Number,
    },
  ],
  discount: String,
  status: String,
  paymentMethod: String,
  shoppingCost: String,
  deliveryAddress: {
    street: String,
    city: String,
    zipCode: String,
    country: String,
  },
},{ timestamps: true });

// create model Order

const Order_md = mongoose.model("order", orderSchema);

module.exports = Order_md;
