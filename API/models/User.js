const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    namaUser: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    passwordUser: {
        type: String,
        required: true
    },
    emailUser: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    tokoUser: {
        type: String,
        required: true,
        trim: true
    },
    jumlahBarangTerjual: {
        type: Number,
        default: 0
    },
    jumlahLaba: {
        type: Number,
        default: 0
    }
})