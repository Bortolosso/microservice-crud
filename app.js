const colors = require("colors");

const connectServer = require("./src/config/server");
const connectDatabase = require("./src/config/database");

async function initApp(){
    try{
        connectServer.connect(8081).then(() => {
            return(
                console.log("Call function connect Server with success ! ! !".green)
                );
        }).catch((err) => {
            return (
                console.log(err, "Error call function connect Server ! ! !".red, "\n", err.red)
            );
        });
    }catch(err){
        return (
            console.log("Error call function ! ! !".red, "\n" ,err.red)
        );
    };
    
    try{
        connectDatabase.database().then(() => {
            return(
                console.log("Call function connect Database with success ! ! !".green)
                );
        }).catch((err) => {
            return (
                console.log(err, "Error call function connect Server ! ! !".red, "\n", err.red)
            );
        });
    }catch(err){
        return (
            console.log("Error call function ! ! !".red, "\n" ,err.red)
        );
    };
}; 

try{
    initApp();
}catch(err){
    console.log(err);
};


