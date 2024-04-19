import cors from "cors";
import express from "express";
import { verify } from "jsonwebtoken";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import routes from "../src/api/routers";
import dbInit from "../src/db/init";
import User from "../src/db/models/user";

dbInit();

const app = express();
// set port, listen for requests
const port = process.env.PORT || 8080;
const jwtToken = process.env.JWT_TOKEN;

app.use(
  (req, res, next) => {
    next();
  },
  cors({
    origin: "http://localhost:8081",
    maxAge: 84600,
  })
);

// parse request of content-type application/json
app.use(express.json());

// parse request of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/*", (req, res) => {
  const entryPoint = ["/main.js"];

  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onAllReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
  );
});

app.use("/api/v1/", routes);

app.get("/*", (req, res) => {
  const entryPoint = ["/main.js"];

  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
  );
});

app.get("/test", async (req, res) => {
  return res.status(200).send("Well done! This is the test endpoint.");
});

app.get(
  "/protected-test",
  async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1] || "";

      console.log("token", token);
      if (!token) {
        return res.status(403).send("A token is required for authentication");
      }

      const decodedToken = verify(token, jwtToken || "dumb_secret");

      // @ts-expect-error
      req.user = decodedToken;

      return next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ msg: "Couldnt Authenticate" });
    }
  },
    async (req, res) => {
      const user = await User.findOne({
        where: {
          // @ts-expect-error
          id: req.user.id,
        },
        attributes: { exclude: ["password"] },
      });

      if (user === null) {
        return res.status(404).json({ msg: "User not found" });
      }

      return res.status(200).json(user);
    };
);

try {
  app.listen(3002, () => {
    console.log("App is running on http://localhost:3002");
  });
} catch (error) {
  console.error(error);
}
