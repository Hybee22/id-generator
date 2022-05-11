import generateRouter from "./generate-id/index.js";

export default (app) => {
  app.use("/api/v1", generateRouter);
};
