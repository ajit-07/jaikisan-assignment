const mongoose = require('mongoose')
//const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    },
    customerId: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        required: true
    }
}, { timestamps: true })

userSchema.pre('save', function (next) {
    //this.customerId=this.uuidv1()
    this.customerId = this._id
    next()
})

module.exports = mongoose.model('userjks', userSchema)