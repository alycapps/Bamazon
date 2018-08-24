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
    console.log("yay, you connected to the customer function!");
};

//function to read current listings
var readlistings = function() {
    console.log("function to read listings ran");
    conn.query("select * from products", function(err, res) {
        if (err) throw err;
        console.log(res);
        custInquirerCall();
    })
};

//prompt users to enter info for items and quantity they want to buy
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

        conn.end();

        //start over and see what view they would like to use
        // index();
    })
};


module.exports = customer;