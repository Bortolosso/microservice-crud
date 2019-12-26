const mongoose = require("mongoose");

const SchemaApi = mongoose.Schema;

const ApiSchema = new SchemaApi({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    city:{
        type: String
    }
});

const Schema = mongoose.model("Schema", ApiSchema);

module.exports = Schema;