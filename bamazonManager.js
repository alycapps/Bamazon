var inquirer = require("inquirer");
var mysql = require("mysql");

//setup for connection call
var conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

var manager = function() {
    console.log("yay, you connected to the manager function!");
    conn.connect(function(err) {
        if(err) throw err;
        manInquirerCall();
    })
}

var manInquirerCall = function() {
    inquirer.prompt([
        {
            type: "list",
            name: "manView",
            message: "What would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        }
    ]).then(function(view) {
        if(view.manView === "View Products for Sale") {
            forSale();
        }
        else if(view.manView === "View Low Inventory") {
            lowInventory();
        }
        else if(view.manView === "Add to Inventory") {
            addInventory();
        }
        else if(view.manView === "Add New Product") {
            newProduct();
        }
    })
};

var forSale = function() {
    console.log("for sale function");
};

var lowInventory = function() {
    console.log("low inventory function");

};

var addInventory = function() {
    console.log("add inventory function");

};

var newProduct = function() {
    console.log("new product function");

}
module.exports = manager;