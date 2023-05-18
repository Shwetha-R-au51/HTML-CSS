import jwt from "jsonwebtoken";
import User from '../models/User.js';
import Category from '../models/Categories.js';
import medicines from '../models/Medicines.js';
import mongodb from "mongodb"

const findUser = async(authorization) => {
    const decoded = authorization ? JSON.parse(Buffer.from(authorization?.split('.')[1], 'base64').toString()) : ""
    var id = new mongodb.ObjectId(decoded.id);
    const user = await User.findById({ '_id': id }).exec();
    return user
}

export const addCategory = async (req,res) =>{
    const token = req.headers.authorization
    let category = new Category(
        req.body
    )
    const newCategory=await category.save()
    res.status(201).json(newCategory)
}

export const getCategories = async (req,res) =>{
    const token = req.headers.authorization
    const categories = await Category.find({})
    res.status(201).json(categories)
}

export const deleteCategories = async (req,res) =>{
    const token = req.headers.authorization
    const categories = await Category.deleteOne({code:req.params.code})
    res.status(201).json(categories)
}

export const getMedicines = async (req,res) =>{
    const token = req.headers.authorization
    const medicines = await medicines.find({})
    res.status(201).json(medicines)
}

export const addMedicines = async (req,res) =>{
    const token = req.headers.authorization
    let medicine = new medicines(
        req.body
    )
    const newMedicine=await medicine.save()
    res.status(201).json(newMedicine)
}

export const deleteMedicine = async (req,res) =>{
    const token = req.headers.authorization
    console.log(req.params.name)
    const medicines = await medicines.deleteOne({medicineName:req.params.name})
    res.status(201).json(medicines)
}


