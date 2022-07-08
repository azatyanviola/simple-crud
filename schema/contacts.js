import mongoose from "mongoose";
const {Schema} = mongoose;

const contactSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    isPublic: {
        type: Boolean,
        required: false,
      }
     
   
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  export default Contact;