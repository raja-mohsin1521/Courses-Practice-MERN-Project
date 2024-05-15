const mongose=require('mongoose')

const contactSchema=new mongose.Schema({
email:{
    type: String,
        required: true
    

},
phone:{
    type: String,
        required: true
    

},
message:{
    type: String,
        required: true
    

}
})
const contactDetails=mongose.model('contact',contactSchema)
module.exports= contactDetails