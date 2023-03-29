const { Schema, model } = require('mongoose');


const dislikeSchema = new Schema({
    dislikedName: {
        type: String,
        required: true,
        trim: true,
    }    
});

const Dislike = model('Dislike', dislikeSchema);

module.exports = Dislike;