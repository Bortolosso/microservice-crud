const Schema = require("../model/schema");

async function createSchema(req, res) {
    var erro = [];

    if(erro.length > 0){
        return(
            res.send({
                success: false
            })
        );
    }else{
        const newSchemaApi = {
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        };
        new Schema(newSchemaApi).save(
            console.log("Create success ! ! !")
        ).then(() => {}).catch((err) => {
            console.log("Create error ! ! !", err);
        });
        return(
            res.send({
                success:true
            })
        );
    };
};

async function editSchema(req, res) {
    var erro = [];

    if(erro.length > 0){
        return(
            res.send({
                success: false
            })
        );
    }else{
        Schema.findOne({_id: req.params.schemaId}).then((Schema) => {
            Schema.name = req.body.name;
            Schema.age = req.body.age;
            Schema.city = req.body.city;

            Schema.save().then(() => {
                console.log("Edit success ! ! !");
            }).catch((error) => {
                console.log("Edit error ! ! !");
            });
            return(
                res.send({
                    success:true
                })
            );
        });
    };
};

async function deleteSchema(req, res){
    Schema.deleteOne({_id:req.params.Schema}).then((resDb) => {
         console.log("Deleted with success ! ! !");
         res.send(resDb);
    }).catch((erro) => {
        console.log("Error in delete schema ! ! !");        
    });
};

async function showId(req, res){
    Schema.findOne({_id: req.params.schemaId}).then((Segments) => {
        Schema.name = req.body.name;
        Schema.age = req.body.age;
        Schema.city = req.body.city;

        res.send(Segments);
    });
};

async function showAll(req, res){
    Schema.find().then((Segments) => {
        Schema.name = req.body.name;
        Schema.age = req.body.age;
        Schema.city = req.body.city;

        res.send(Segments);
    });
};

module.exports = {
    createSchema,
    editSchema,
    deleteSchema,
    showId,
    showAll
};