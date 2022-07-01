const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriends,
  removeFriends,
  editUser,
} = require('../../controllers/userController');

//localhost/api/users
router.route('/').get(getAllUsers).post(createuser);


router.route('/:userId').get(getSingleUser).delete(deleteUser).put(editUser);

router.route('/:userId/friends/:friendId').delete(removeFriends).post(addFriends);

module.exports = router;
