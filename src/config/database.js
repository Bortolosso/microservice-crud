const constants = require("../constants/database");
const mongoose = require("mongoose");

async function database() {
    mongoose.Promise = global.Promise
    try{
        mongoose.connect(
            constants.DB.LOCALHOST,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        ).then(() => {
            return (
                console.log("Connect database with success ! ! !".green)
            );
        }).catch((err) =>{
            return (
                console.log("Error connect database ! ! !".red, "\n", err.red)
            );
        });
    }catch(err){
        return (
            console.log("Error database".red, "\n", err.red)
        );
    };
};

module.exports = {
    database
};