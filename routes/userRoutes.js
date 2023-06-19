import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/UserModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
import bcrypt from 'bcryptjs';

const userRoutes = express.Router();

userRoutes.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user),
        });
        return;
      }
      res.status(401).send({ message: 'Invalid password/user' });
      return;
    }
    res.status(401).send({ message: 'Invalid password/user' });
  })
);

userRoutes.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser =  new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  })
);

export default userRoutes;
