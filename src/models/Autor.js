import mongoose from "mongoose";

const autorSchema = mongoose.Schema(
    {
        id:{type:String},
        nome:{type:String, require:true},
        nacionalidade:{type:String}
        
    },
    {
        versionKey: false    
    }
);

const autores = mongoose.model('autores',autorSchema);
export default autores;