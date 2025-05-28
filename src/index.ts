import { ExpressServer } from "./server/server";

async function startApp() {
  console.log("starting app");
  // Initial call to get agent prices

}

startApp().then(async () => {
  console.log("app started");
  const server = new ExpressServer();
});

process.on("uncaughtException", function (err) {
  console.log("uncaught Exception", err.message);
});

process.on("unhandledRejection", function (reason, promise) {
  console.log("unhandled Rejection at ", promise, "reason", reason);
});
