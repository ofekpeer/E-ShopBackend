// import express from 'express';
// import expressAsyncHandler from 'express-async-handler';
// import Order from '../models/orderModel';
// import { isAuth } from '../utils';
// const orderRoutes = express.Router();

// orderRoutes.get(
//   '/',
//   isAuth,
//   //   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const orders = await Order.find().populate('user', 'name');
//     res.send(orders);
//   })
// );

// orderRoutes.post(
//   '/',
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const newOreder = new Order({
//       orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
//       shippingAddress: req.body.shippingAddress,
//     });
//     res.send(orders);
//   })
// );

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

// export default orderRoutes;
