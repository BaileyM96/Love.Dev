const { Schema, model } = require('mongoose');

const matchSchema = new Schema ({
    name: {
        type: String,
        required:true,
    }
});

const Matches = model('Matches', matchSchema);

module.exports = Matches;