import router from "./nomesRoutes.js";
import express from "express";


const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send("Curso de node")
    })
  
    app.use(
      express.json(), router
    )
  }
  


export default routes;