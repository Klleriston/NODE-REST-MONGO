import express from "express";
import connect from "./config/db.js"
import routes from "./routes/index.js"

const c = await connect();
c.on("error", (e) => {
    console.error(e)
});
c.once("open", () => {
    console.log("sucess!")
})
const app = express();
routes(app);
export default app;
