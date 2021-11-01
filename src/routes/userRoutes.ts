import express from 'express';
import UserControllers from '../controllers/UserControllers';
const router = express.Router();

// @route /api/users
// @desc GET get all users from db
// @access Public
router.get('/', UserControllers.getAllUsers);

// @route /api/users
// @desc POST create new user in db
// @access Public
router.post('/', UserControllers.createUser);

// @route /api/users/:userId
// @desc GET user from db with id
// @access Public
router.get('/:userId', UserControllers.getUser);

// @route /api/users/:userId
// @desc PUT create new user in db
// @access Public
router.put('/:userId', UserControllers.updateUser);

// @route /api/users/:userId
// @desc DELETE remove user from db by id
// @access Public
router.delete('/:userId', UserControllers.deleteUser);

module.exports = router;
