var inquirer = require("inquirer");
var mysql = require("mysql");
var customer = require("./bamazonCustomer");
var manager = require("./bamazonManager");
var supervisor = require("./bamazonSupervisor");

inquirer.prompt([
    {
        type: "list",
        name: "view",
        message: "What view would you like to acess?",
        choices: ["Customer", "Manager", "Supervisor"],
    }
]).then(function(viewChoice) {
    if(viewChoice.view === "Customer") {
        customer();
    }
    else if(viewChoice.view === "Manager") {
        manager();
    }
    else if(viewChoice.view === "Supervisor") {
        supervisor();
    }
});

