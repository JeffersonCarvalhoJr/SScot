class HomeController{

    async index(req, res){
        res.send("Rodando");
    }

    async validate(req, res){
        res.send("okay");
    }

}

module.exports = new HomeController();