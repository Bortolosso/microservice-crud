const express = require ("express");
const bodyParser = require("body-parser");
const path = require("path");

const controller = require("../controllers/crud")

async function connect(PORT) {

    const app = express();

    const router = express.Router();

    const urlencodedParse = bodyParser.urlencoded({
        extended:false
    }); 

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, "public")));

    app.use(router);
    
    router.get("/", controller.showAll);

    router.post("/", controller.createSchema);

    router.get("/:schemaId", controller.showId);

    router.put("/:schematId", controller.editSchema);

    router.delete("/:schemaId", controller.deleteSchema);

    app.listen(PORT, () => {
        console.log(`Server running in port::${PORT}`);
    });
};

module.exports = {
    connect
};