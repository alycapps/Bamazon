var inquirer = require("inquirer");
var mysql = require("mysql");
var index = require("./index");

//setup for connection call
var conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

var customer = function() {   
    //Connect to SQL database
    conn.connect(function(err) {
        if(err) throw err;
        readlistings();
    })
};

//function to read current listings
var readlistings = function() {
    conn.query("select * from products", function(err, res) {
        if (err) throw err;
        for (var m=0; m<res.length; m++) {
            console.log(`ID: ${res[m].item_id}, Product: ${res[m].product_name}, Price: $${res[m].price}`);
        }
        custInquirerCall();
    })
};

//prompt users to enter info for items and quantity they want to buy
var chosenId, chosenUnits;
var custInquirerCall = function() {
    inquirer.prompt([
        {
        name: "id",
        type: "input",
        message: "What is the ID of the item you would like to buy?"
        },
        {
        name: "units",
        type: "input",
        message: "How many units would you like to buy?"
        }
    ]).then(function(response) {
        console.log("woohoo made it through the questions");
        chosenId = response.id;
        console.log("chosen id: " + chosenId);
        chosenUnits = response.units;
        console.log("chosen units: " + chosenUnits);
        custUpdate();
    })
};

var custUpdate = function() {
    console.log("Now we are in the updating price function :)")
        //search through database for quantity of id entered
        conn.query("select stock_quantity from products where ?", 
        {
            item_id: chosenId
        }, function(err, data) {
            console.log("quantity of chosen" + JSON.stringify(data[0].stock_quantity));
            if (err) throw err;
            if(chosenUnits > data[0].stock_quantity) {
                console.log("you requested more than we have");
            }
            else {
                console.log("ok buy it");
            }
        })
        //checks quantity of id chosen 
        //if less than it buys
        //if more isufficient funds

        //start over and see what view they would like to use
        // index();
};



module.exports = customer;