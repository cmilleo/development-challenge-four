import "dotenv/config";
import app from "./app";
import AppDataSource from "./data-source";

const initConnection = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
  });
};
initConnection();
