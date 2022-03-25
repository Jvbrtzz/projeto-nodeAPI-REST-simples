import router from "./nomesRoutes.js";
import express from "express";


const routes = (app) => {
    
    app.use(
      express.json(), router
    )
  }
  


export default routes;