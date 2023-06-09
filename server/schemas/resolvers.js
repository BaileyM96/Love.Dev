const { AuthenticationError, UserInputError } = require('apollo-server-express');
//TODO Add a AWS S3 bucket so the user can upload a photo and photos later on.
const AWS = require('aws-sdk');
const { createReadStream, createWriteStream } = require('fs');
//Create the s3 bucket env in a env file later

const { User, Like, Dislike } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    dislikes: async (parent, args, context) => {
      if (context.user) {
        return await Dislike.find({ dislikedUserId: parent._id});
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id});
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    likes: async () => {
      return Like.find();
    },
    userLikes: async (parent, { userId }) => {
      return Like.find({ likedBy: userId });
    },
  },


  Mutation: {
    createUser: async (parent, { name, email, password, location, age, gender, images, bio, language, want, hobbies }) => {
      const user = await User.create({ name, email, password, location, age, gender, images, bio, language, want, hobbies });
      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, { userId }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to delete a user');
      }
    
      const deletedUser = await User.findByIdAndDelete(userId);
    
      if (!deletedUser) {
        throw new UserInputError('User not found');
      }
    
      return { message: `User ${deletedUser.name} successfully deleted` };
    },
    updateUser: async (parent, { id, name, email, password, location, age, gender, images, bio }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to update a user');
      }
  
      const updatedUser = await User.findByIdAndUpdate(id, { name, email, password, location, age, gender, images, bio }, { new: true });
  
      if (!updatedUser) {
        throw new UserInputError('User not found');
      }
  
      return updatedUser;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.password;

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    // let the user write to the database to add a dislike
    addDislike: async (parent, { dislikedName }, context) => {
      if (context.user) {
        const dislike = await Dislike.create({
          dislikedName: context.user.email,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { dislikes: dislike._id } }
        );

        return dislike;
      }
      throw new AuthenticationError('You need to be logged in!');
    }


  }
};


module.exports = resolvers;