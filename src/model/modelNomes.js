import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
    {
      id: {type: String},
      nome: {type: String, required: true},
      sobrenome: {type: String, required: true},
     
    }
  );
  
  const pessoas= mongoose.model('pessoas-nomes', pessoaSchema);
  
  export default pessoas;