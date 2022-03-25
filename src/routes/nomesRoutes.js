import express from "express";
import pessoas from "../model/modelNomes.js";
import cidades from "../model/modelCidades.js";


const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send("API simples")
})

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

router.get('/nomes/:id',(req, res) =>{
    const id = req.params.id
    pessoas.findById(id, (err, pessoas) => {     
       
        res.status(200).send(pessoas);
      })
    })

router.get('/cidade', (req, res) =>{
  cidades.find((err, cidade) =>{
    res.status(200).json(cidade)
  })
})
    
router.post('/cidade', (req, res) =>{
  let cidade = new cidades(req.body)
  cidade.save(() =>{
    res.status(201).send(cidade.toJSON())
  })
})

export default router;