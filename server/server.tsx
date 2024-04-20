import cors from "cors";
import express from "express";
import fs from "fs";
import { verify } from "jsonwebtoken";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
import App from "../client/App";
import routes from "../src/api/routers";
import dbInit from "../src/db/init";
import User from "../src/db/models/user";

// TODO: continue https://nils-mehlhorn.de/posts/typescript-nodejs-react-ssr/ @ Server React SSR from Node.js
dbInit();

const server = express();
// set port, listen for requests
const port = process.env.PORT || 8080;
const jwtToken = process.env.JWT_TOKEN;

server.use(
  (req, res, next) => {
    next();
  },
  cors({
    origin: "http://localhost:8081",
    maxAge: 84600,
  })
);

// parse request of content-type application/json
server.use(express.json());

// parse request of content-type application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.use("/api/v1/", routes);

server.get("/test", async (req, res) => {
  return res.status(200).send("Well done! This is the test endpoint.");
});

server.get(
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
  }
);

server.use(express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);
const assets = JSON.parse(manifest);

server.get("/", (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", { assets, component });
});

// server.get("/*", (req, res) => {
//   const entryPoint = ["/main.js"];

//   const { pipe } = ReactDOMServer.renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       <App />
//     </StaticRouter>,
//     {
//       bootstrapScripts: entryPoint,
//       onShellReady() {
//         res.statusCode = 200;
//         res.setHeader("Content-type", "text/html");
//         pipe(res);
//       },
//       onShellError() {
//         res.statusCode = 500;
//         res.send("<!doctype html><p>Loading...</p>");
//       },
//     }
//   );
// });

try {
  server.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
  });
} catch (error) {
  console.error(error);
}
