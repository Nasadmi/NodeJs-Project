import { Router } from "express";

//Routes of my server
const route = Router();

route.get("/", (req, res) => res.render("home"));

route.get("/about", (req, res) => res.render("about"));

route.get("/other", (req, res) => res.render("others"));

export default route;
