var inquirer = require("inquirer");
var mysql = require("mysql");

inquirer.prompt([
    {
        type: "list",
        name: "view",
        message: "What view would you like to acess?",
        choices: ["Customer", "Manager", "Supervisor"],
    }
]).then(function(viewChoice) {
    if(viewChoice.view === "Customer") {
        console.log("yay!");
    }
    else if(viewChoice.view === "Manager") {
    console.log("Woohoo you got this!");
    }
    else if(viewChoice.view === "Supervisor") {
        console.log("Super choice!");
    }
});