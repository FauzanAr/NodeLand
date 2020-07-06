const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    namaProduk: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    deskripsiProduk: {
        type: String,
        required: true
    },
    jumlahProdukTerjual: {
        type: Number,
        required: true
    },
    hargaBeliProduk: {
        type: Number,
        required: true
    },
    hargaJualProduk: {
        type: Number,
        required: true
    },
    gambarProduk: {
        type: String
    },
    //* Mendifinisikan kapan produk tsb di daftarkan di website
    tglDaftarProduk: {
        type: Date,
        default: Date.now
    },
    tglUpdateProduk: {
        type: Date,
    }
})