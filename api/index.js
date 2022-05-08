const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const honorRoute = require("./routes/honor");
const linksRoute = require("./routes/links");
const techRoute = require("./routes/techIcon");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/honor", honorRoute);
app.use("/api/links", linksRoute);
app.use("/api/tech", techRoute);

app.listen(process.env.PORT || 2000, () => {
  console.log("Backend is Running.");
});
