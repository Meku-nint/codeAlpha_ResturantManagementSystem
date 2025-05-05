import models from '../models/models'
const {Table,Food,Drink,Order,Reservation,Inventory}=models;
export const addFoodToMenu=async(req,res)=>{
    try {
        const {foodName,description,price,forWhatTime,foodId,availableStatus}=req.body;
        if(!foodName||!description||!price||!forWhatTime||!foodId||!availableStatus){
            throw new Error("All fields are required");
        }
        const existing=await Food.findOne({foodId});
        if(existing){
        throw new Error("The food has already existed");
        }
        const uploadFood=new Food({
            foodName,
            description,
            price,
            forWhatTime,
            foodId,
            availableStatus
        })
        await uploadFood.save();
        res.status(201).json({
            success:true,
            message:"food uploaded successfully",
            uploadFood}
        );
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}
export const breakfastFood=async(req,res)=>{
    try {
        const breakfast=await Food.find({forWhatTime:"breakfast"});
        if(!breakfast){
            throw new Error("Breakfast not found");
        }
        res.status(200).json({
            success:true,
            breakfast
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const lunchFood=async(req,res)=>{    
    try {
        const lunch=await Food.find({forWhatTime:"lunch"});
        if(!lunch){
            throw new Error("Lunch not found");
        }
        res.status(200).json({
            success:true,
            lunch
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const dinnerFood=async(req,res)=>{
    try {
        const dinner=await Food.find({forWhatTime:"dinner"});
        if(!dinner){
            throw new Error("Dinner not found");
        }
        res.status(200).json({
            success:true,
            dinner
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const allFood=async(req,res)=>{
    try {
        const allFood=await Food.find();
        if(!allFood){
            throw new Error("All food not found");
        }
        res.status(200).json({
            success:true,
            allFood
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const editFood=async(req,res)=>{
    try {
        const {foodId: providedFoodId}=req.body;
        if(!providedFoodId){
            throw new Error("Please provide foodId");
        }
        const food=await Food.findOne({foodId: providedFoodId});
        if(!food){
            throw new Error("Food not found");
        }
        const {foodName,description,price,forWhatTime,foodId,availableStatus}=req.body;
        if(!foodName||!description||!price||!forWhatTime||!foodId||!availableStatus){
            throw new Error("All fields are required");
        }
        food.foodName=foodName;
        food.description=description;
        food.price=price;
        food.forWhatTime=forWhatTime;
        food.foodId=foodId;
        food.availableStatus=availableStatus;
        await food.save();
        res.status(200).json({
            success:true,
            message:"Food updated successfully",
            food
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteFood=async(req,res)=>{
    try {
        const {foodId: providedFoodId}=req.params;
        if(!providedFoodId){
            throw new Error("Please provide foodId");
        }
        const food=await Food.findOne({foodId: providedFoodId});
        if(!food){
            throw new Error("Food not found");
        }
        await Food.deleteOne({foodId: providedFoodId});
        res.status(200).json({
            success:true,
            message:"Food deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteDrink=async(req,res)=>{
    try {
        const {drinkId: providedDrinkId}=req.params;
        if(!providedDrinkId){
            throw new Error("Please provide drinkId");
        }
        const drink=await Drink.findOne({drinkId: providedDrinkId});
        if(!drink){
            throw new Error("Drink not found");
        }
        await Drink.deleteOne({drinkId: providedDrinkId});
        res.status(200).json({
            success:true,
            message:"Drink deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const editDrink=async(req,res)=>{
    try {
        const {drinkId: providedDrinkId}=req.body;
        if(!providedDrinkId){
            throw new Error("Please provide drinkId");
        }
        const drink=await Drink.findOne({drinkId: providedDrinkId});
        if(!drink){
            throw new Error("Drink not found");
        }
        const {drinkName,description,price,alcoholStatus,drinkId,availableStatus}=req.body;
        if(!drinkName||!description||!price||!alcoholStatus||!drinkId||!availableStatus){
            throw new Error("All fields are required");
        }
        drink.drinkName=drinkName;
        drink.description=description;
        drink.price=price;
        drink.alcoholStatus=alcoholStatus;
        drink.drinkId=drinkId;
        drink.availableStatus=availableStatus;
        await drink.save();
        res.status(200).json({
            success:true,
            message:"Drink updated successfully",
            drink
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const allDrink=async(req,res)=>{
    try {
        const allDrink=await Drink.find();
        if(!allDrink){
            throw new Error("All drink not found");
        }
        res.status(200).json({
            success:true,
            allDrink
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const allTable=async(req,res)=>{
    try {
        const allTable=await Table.find();
        if(!allTable){
            throw new Error("All table not found");
        }
        res.status(200).json({
            success:true,
            allTable
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const addTable=async(req,res)=>{ 
    try {
        const {tableId,tableStatus}=req.body;
        if(!tableId||!tableStatus){
            throw new Error("All fields are required");
        }
        const existing=await Table.findOne({tableId});
        if(existing){
            throw new Error("The table has already existed");
        }
        const uploadTable=new Table({
            tableId,
            tableStatus
        })
        await uploadTable.save();
        res.status(201).json({
            success:true,
            message:"Table uploaded successfully",
            uploadTable
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}
export const addDrinkToMenu=async(req,res)=>{
    try {
        const {drinkName,description,price,alcoholStatus,drinkId,availableStatus}=req.body;
        if(!drinkName||!description||!price||!alcoholStatus||!drinkId||!availableStatus){
            throw new Error("All fields are required");
        }
        const existing=await Drink.findOne({drinkId});
        if(existing){
        throw new Error("The drink has already existed");
        }
        const uploadFood=new Food({
            drinkName,
            description,
            price,
            alcoholStatus,
            drinkId,
            availableStatus
        })
        await uploadFood.save();
        res.status(201).json({
            success:true,
            message:"food uploaded successfully",
            uploadFood}
        );
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}
export const postInventory=async()=>{
try {
    const {description}=req.body;
    if(!description){
        throw new Error("All fields are required");
    }
    const newReport= new Inventory({
        description
    })
    await newReport.save();
    res.status(201).json({
        success:true,
        message:"The report is posted",
        newReport
    })

} catch (error) {
    res.status(500).json({
        success:false,
        message:message.error
    })
}
}
export const TableReservation=async(req,res)=>{
    try {
        
   
    const {reserverName,phone,tableId,date,time}=req.body;
    if(!reserverName||!phone||!tableId||!date||!time){
        throw new Error("All fields are required");
    }
 const newReserver=new Reservation({
    reserverName,
    phone,
    tableId,
    date,
    time
 })
 await newReserver.save();
 res.status(201).json(
   { success:true,
    message:"Table reservation is successful",
    newReserver}

 )
} catch (error) {
    res.status(500) .json({
        success:false,
        message:error.message
    })   
}
}
export const orderPost=async(req,res)=>{
    const {orderId,delivered,payed}=req.body;
    try {
        if(!orderId||!payed,delivered){
            throw new Error("The fields are required");
        }
        const newOrder=new Order({
            orderId,delivered,payed
        })
        await newOrder.save();
        res.status(201).json({
            success:true,
            message:"Order is ordered",
            newOrder
        })
    } catch (error) {
       res.status(500).json({
        success:false,
        message:error.message
       })
    }
}
export const editOrders=async(req,res)=>{
    try {
        const {orderId: providedOrderId}=req.body;
        if(!providedOrderId){
            throw new Error("Please provide orderId");
        }
        const order=await Order.findOne({orderId: providedOrderId});
        if(!order){
            throw new Error("Order not found");
        }
        const {orderId,delivered,payed}=req.body;
        if(!orderId||!payed,delivered){
            throw new Error("The fields are required");
        }
        order.orderId=orderId;
        order.delivered=delivered;
        order.payed=payed;
        await order.save();
        res.status(200).json({
            success:true,
            message:"Order updated successfully",
            order
        })
    
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
     
}
export const deleteOrder=async(req,res)=>{
    try {
        const {orderId: providedOrderId}=req.params;
        if(!providedOrderId){
            throw new Error("Please provide orderId");
        }
        const order=await Order.findOne({orderId: providedOrderId});
        if(!order){
            throw new Error("Order not found");
        }
        await Order.deleteOne({orderId: providedOrderId});
        res.status(200).json({
            success:true,
            message:"Order deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteReservation=async(req,res)=>{
    try {
        const {reservationId: providedReservationId}=req.params;
        if(!providedReservationId){
            throw new Error("Please provide reservationId");
        }
        const reservation=await Reservation.findOne({reservationId: providedReservationId});
        if(!reservation){
            throw new Error("Reservation not found");
        }
        await Reservation.deleteOne({reservationId: providedReservationId});
        res.status(200).json({
            success:true,
            message:"Reservation deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const editReservation=async(req,res)=>{
    try {
        const {reservationId: providedReservationId}=req.body;
        if(!providedReservationId){
            throw new Error("Please provide reservationId");
        }
        const reservation=await Reservation.findOne({reservationId: providedReservationId});
        if(!reservation){
            throw new Error("Reservation not found");
        }
        const {reserverName,phone,tableId,date,time}=req.body;
        if(!reserverName||!phone||!tableId||!date||!time){
            throw new Error("All fields are required");
        }
        reservation.reserverName=reserverName;
        reservation.phone=phone;
        reservation.tableId=tableId;
        reservation.date=date;
        reservation.time=time;
        await reservation.save();
        res.status(200).json({
            success:true,
            message:"Reservation updated successfully",
            reservation
        })
    
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
     
}
export const orderReport=async(req,res)=>{
    try {
        const allOrder=await Order.find();
        if(!allOrder){
            throw new Error("All order not found");
        }
        res.status(200).json({
            success:true,
            allOrder
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    } 
}