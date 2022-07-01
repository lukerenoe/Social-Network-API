const { User, Thought } = require('../models');



const userController = {
  //where we create controller methods
  //get all users, get user by ID, create user, update user, 
  getAllUsers(req, res) {
    User.find()
      .select('-__v')
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //delete user, add friend, remove friend
}

module.exports = userController