require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      const link = `http://localhost:${PORT}`;
      console.log(`🚀 Backend server running in ${process.env.NODE_ENV} mode`);
      console.log(`🔗 Click to open: ${link}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error.message);
    process.exit(1);
  }
}

startServer();
