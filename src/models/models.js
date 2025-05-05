import mongoose, { Schema } from "mongoose";
const foodSchema=new Schema.mongoose({
    foodName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    forWhatTime:{      // for which time i mean it is for breakfast , lunch or dinner for what.
        type:String,
        required:true
    },
    foodId:{
        type:String,
        unique:true,
        required :true
    },
    availableStatus:{
        type:Boolean,
        default:true,
        required:true
        
    }
})
const drinkSchema=new Schema.mongoose({
    drinkName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    alcoholStatus:{      // for which time i mean it is for breakfast , lunch or dinner for what.
        type:String,
        required:true
    },
    drinkId:{
        type:String,
        required:true
    },
    availableStatus:{
        type:Boolean,
        default:true,
        required:true
        
    }
})
const inventoryTrackingSchema=new Schema.mongoose({ // this help us to notice if the presence of spicy to prepare menu.
    description:{
        type:String,
        required:true
    }    
})
const tableReservationSchema=new Schema.mongoose({
       reserverName:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
       },
        tableId:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        time:{
            type:String,
            required:true
        }
})
const tableSchema=new Schema.mongoose({
    tableId:{
        type:String,
        required:true,
    },
    tableStatus:{
        type:String,
        default:"free"
    }
})
const orderSchema=new Schema.mongoose({
    orderId:{
        type:String,
    },
    payed:{
        type:Boolean,
        default:false
    },
    delivered:{
        type:Boolean,
        default:false
    }
})
const Order=mongoose.model("Order",orderSchema);
const Food=mongoose.model('Food',foodSchema);
const Drink=mongoose.model("Drink",drinkSchema);
const Table=mongoose.model("Table",tableSchema);
const Inventory=mongoose.model("Inventory",inventoryTrackingSchema);
const Reservation=mongoose.model("Reservation",tableReservationSchema);
export default{Food,Drink,Table,Reservation,Inventory,Order};