const mongoose = require('moongoose');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname should be atleast 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Lastname must be atleast 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address' ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:  [3, 'Color should be atleast 3 characters long'], 
        },
        plate:{
            type: String, 
            required: true,
            minlength:  [3, 'Plate should be atleast 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min:  [1, 'Capacity should be atleast 1'],
        }
    },
    vehicleType: {
        type: String, 
        required: true,
        enum: ['car', 'motorcycle', 'auto'],
    },
    location:{
        lat:{
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function (){
    const token= jwt.sign({ _id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;  
}

captainSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword= async function (password){
    return await bcrypt.hash(password,10);
}

const captainModel= mongoose.model('captain', captainSchema)

module.exports = captainModel;