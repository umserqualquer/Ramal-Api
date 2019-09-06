const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RamalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    initial: {
        type: String,
        required: true,
    },
    leader: {
        type: String,
        required: true,
    },
    ramal: {
        type: String,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    }

});

RamalSchema.plugin(mongoosePaginate);

mongoose.model("Ramal", RamalSchema);
