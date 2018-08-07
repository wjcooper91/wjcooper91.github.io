var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showProduct()
});

function showProduct() {
    connection.query("SELECT * FROM products", function(err, results) {
                if (err) throw err;
                inquirer.prompt([{
                            name: "Select",
                            type: "list",
                            message: "What would you like to purchase?",
                            choices: function() {
                                var choices = [];
                                for (var i = 0; i < results.length; i++) {
                                    choices.push(results[i].id+": " +results[i].product_name+ " $" +results[i].price);
                                }
                                return choices;
                                }
                        },
                        {
                            name: "amount",
                            type: "input",
                            message: "How many would you like to buy?",
                            filter: Number
                        }
                    ]).then(function(input) {
                        

                    })
                    });
                }