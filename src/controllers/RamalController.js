const mongoose = require('mongoose');

const Ramal = mongoose.model('Ramal');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const ramais = await Ramal.paginate({},{page, limit:10});

        return res.json(ramais);
    },

    async show(req, res){
        const ramal = await Ramal.findById(req.params.id);

        return res.json(ramal);
    },
    
    async store(req, res){
        // Criação
        const ramal = await Ramal.create(req.body);

        return res.json(ramal);
    },

    async update(req, res){
        const ramal = await Ramal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
        return res.json(ramal);
    },

    async destroy(req, res){
        await Ramal.findByIdAndRemove(req.params.id);

        return res.send();


    }


}