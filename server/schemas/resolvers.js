const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Like } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
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
    createUser: async (parent, { name, email, password, location, age, gender, images, bio }) => {
      const user = await User.create({ name, email, password, location, age, gender, images, bio });
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

    createLike: async (parent, { likedUserId }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to like a user');
      }

      const existingLike = await Like.findOne({ likedBy: user._id, likedUser: likedUserId });

      if (existingLike) {
        throw new UserInputError('You have already liked this user');
      }

      const like = await Like.create({ likedBy: user._id, likedUser: likedUserId });

      return like;
    },
  }
};

module.exports = resolvers;