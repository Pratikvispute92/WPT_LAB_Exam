var express = require('express');
var mongoose = require('mongoose');
var db = require('./database/db.js');
var cors = require('cors');

db();
const Schema = mongoose.Schema;
const userschema = new Schema({
    id: Number,
    name: String,
    category: String,
    dateCreated: Date,
    creatorName: String
});
const userModel = mongoose.model('articles', userschema);
var app = express();
app.use(cors());
app.use(express.json())

app.get('/articles', async function (req, res) {
    try {
        var result = await userModel.find({});
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
})

app.post('/articles', async function (req, res) {
    console.log(req.body);
    try {
        var record = new userModel(req.body);
        var ans = await record.save();
        res.send("record inserted")
    } catch (err) {
        res.send(err.message);
    }
})

app.put("/articles/:id", async (req, res) => {
    await userModel.updateOne({ id: req.params.id }, { $set: req.body });
    res.send(" Data updated");
  });

app.listen(9090);