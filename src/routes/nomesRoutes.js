import express from "express";
import pessoas from "../model/modelNomes.js";


const router = express.Router()


router.get('/nomes',(req, res) =>{
    pessoas.find((err, pessoas) => {
        if(!err){
        res.status(200).json(pessoas)
        }else{
            res.status(500).send({message: err.message})
        }
    })
})

router.post('/nomes',(req, res) =>{
    let pessoa = new pessoas(req.body);

    pessoa.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        res.status(201).send(pessoa.toJSON())
      }
    })
  })

export default router;