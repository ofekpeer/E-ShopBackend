import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRoutes = express.Router();

// orderRoutes.get(
//   '/',
//   isAuth,
//   //   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const orders = await Order.find().populate('user', 'name');
//     res.send(orders);
//   })
// );

orderRoutes.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOreder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    const order = await newOreder.save();

    res.status(201).send({ message: 'New Order Created', order });
  })
);

orderRoutes.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    const userId = req.headers.userid;
    if(order.user == userId && order){
      res.send(order);
      return
    }

    res.status(404).send({ message: 'Order Not Found' });
  })
);

// orderRoutes.delete(
//   '/:id',
//   isAuth,
//   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const order = await Order.findById(req.body.id);
//     if (order) {
//       await order.remove();
//       res.send({ message: 'order deleted' });
//     } else {
//       res.status(404).send({ message: 'order ont found' });
//     }
//   })
// );

export default orderRoutes;
