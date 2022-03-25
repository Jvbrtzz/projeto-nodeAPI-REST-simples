import mongoose from "mongoose";

const cidadeSchema = new mongoose.Schema(
    {
      id: {type: String},
      cidade: {type: String, required: true},
      
     
    },
    {
        versionKey: false
    }
  );
  
  const cidades= mongoose.model('cidades', cidadeSchema);
  
  export default cidades;