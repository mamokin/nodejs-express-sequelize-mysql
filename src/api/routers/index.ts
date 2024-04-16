import { Router } from "express";
import postsRouter from "./post.router";

const router = Router();

router.use("/posts", postsRouter);

export default router;
