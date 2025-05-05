import express from 'express';
import {
  addFoodToMenu,
  breakfastFood,
  lunchFood,
  dinnerFood,
  allFood,
  editFood,
  deleteFood,
  addDrinkToMenu,
  allDrink,
  editDrink,
  deleteDrink,
  addTable,
  allTable,
  postInventory,
  TableReservation,
  orderPost,
  editOrders,
  editReservation,
  deleteReservation,
  deleteOrder,
  orderReport
  
} from '../controllers/controllerFileName.js';
const router = express.Router();
// Food Routes
router.post('/food/add', addFoodToMenu);
router.get('/food/breakfast', breakfastFood);
router.get('/food/lunch', lunchFood);
router.get('/food/dinner', dinnerFood);
router.get('/food/all', allFood);
router.put('/food/edit', editFood);
router.delete('/food/delete/:foodId', deleteFood);

// Drink Routes
router.post('/drink/add', addDrinkToMenu);
router.get('/drink/all', allDrink);
router.put('/drink/edit', editDrink);
router.delete('/drink/delete/:drinkId', deleteDrink);

// Table Routes
router.post('/table/add', addTable);
router.get('/table/all', allTable);

// Inventory Route
router.post('/inventory/add', postInventory);

// Reservation Route
router.put('/reservation/edit', editReservation);
router.delete('/reservation/delete/:reservationId', deleteReservation);
router.post('/reservation', TableReservation);

// Order Routes
router.get('/order/report', orderReport);
router.delete('/order/delete/:orderId', deleteOrder);
router.post('/order/add', orderPost);
router.put('/order/edit', editOrders);
export default router;