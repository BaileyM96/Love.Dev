const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
  likedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Likes = model('Like', likeSchema);

module.exports = Like;