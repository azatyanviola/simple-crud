import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
        type: String,
        required: false,
      },
    city: {
        type: String,
        required: false,
      }
  });
  
  const User = mongoose.model('User', userSchema);
  
  export default User;