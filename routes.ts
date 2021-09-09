import express from "express";
import { dataServices,dataControllers } from "./main";
// import { isLoggedIn } from "./guards";

export const routes = express.Router();

routes.get("/getData",dataControllers.firstGetData);
// routes.post("/memos", upload.single("image"), memoController.addMemo);
// routes.put('/memos/:id', memoController.updateMemo);
// routes.delete('/memos/:id', memoController.deleteMemo);

// routes.post("/login", userController.login);
// routes.get("/logout", userController.logout);
// routes.post("/users", isLoggedIn, userController.createUser);