import mongoose from "mongoose";

const projectSchema= new mongoose.Schema({
    companyName:String,
    medicineName:String,
    quantity: String,
    price: String,
});

const Medicines = mongoose.model("Medicines",projectSchema)

export default Medicines;