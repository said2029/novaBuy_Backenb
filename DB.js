const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
