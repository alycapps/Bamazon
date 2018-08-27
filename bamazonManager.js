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

//function to connect to SQL database 
var manager = function() {
    //Connect to SQL database
    conn.connect(function(err) {
        if(err) throw err;
        manInquirerCall();
    })
}

//function to check which manager view the user would like to access
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

//function that allows manager to see items currently for sale
var forSale = function() {
    conn.query("select * from products", function(err, res) {
        if (err) throw err;
        for (var m=0; m<res.length; m++) {
            console.log(`ID: ${res[m].item_id}, Product: ${res[m].product_name}, Price: $${res[m].price}, Quantity: ${res[m].stock_quantity}`);
        }
    })
};

//function that lets managers see items with low inventory(less than 5 in stock)
var lowInventory = function() {
    conn.query("select * from products", function(err, res) {
        if (err) throw err;
        //check if less than 5 inventory in anything
        for (var a=0; a<res.length; a++) {
            var stock = res[a].stock_quantity;
            if (stock < 5) {
                return console.log(`ID: ${res[a].item_id}, Product: ${res[a].product_name}, Quantity: ${res[a].stock_quantity}`);
            }
        }
        console.log("No items with low inventory");
    })
};

//function that allows managers to add inventory to preexisting items
var addInventory = function() {
    console.log("add inventory function");

};

//function that allows managers to add completely new products
var newProduct = function() {
    console.log("new product function");

}
module.exports = manager;