require("dotenv").config();
const app = require("./src/app");
const connectDB = require("../Backend/src/config/database");
const invokeGeminiAi= require("./src/services/ai.service")
const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
  invokeGeminiAi();
  console.log(`Server is running on ${PORT}`);
});
