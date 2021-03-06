const User = require("../../models/index").User;
const jwtDecoder = require("jwt-decode")

const getUserByIdFromToken = async(token) =>{
    try {
        const id = jwtDecoder(token.split(' ')[1]).id
        return await User.findOne({ where: { id } }).catch(
            (err) => {
              console.log("Error: ", err);
            }
          );
        
    } catch (error) {
        console.log(error)     
    }
}


module.exports = {
    getUserByIdFromToken
}