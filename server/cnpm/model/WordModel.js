const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema(
{
    Vietnamese: String,
    Bahnaric: String,
    PoS: String,
    BinhDinh: String,
    KonTum: String,
    GiaLai: String
},
    { collection: `words` }
);
module.exports = mongoose.model("Word", wordSchema);