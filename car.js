var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


function Car (make,model) {
    this.make = make,
    this.model = model
};

var autos = []

autos.push(new Car("chevy", "cam"));
autos.push(new Car("Ford", "f150"));
autos.push(new Car("Tesla", "X"));
autos.push(new Car("Dodge", "Ram"));

console.log(autos)


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/cars", (req,res) => {
    res.send(autos);
    
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});