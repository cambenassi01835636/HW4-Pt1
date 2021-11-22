/*
    File: script-main.js
    GUI Assignment: JS Dynamic Multiplication Table
    Cameron Benassi, UMass Lowell Computer Science, cameron_benassi@student.uml.edu 
    Copyright (c) 2021 by Cameron.  All rights reserved.  May be freely copied or excerpted 
    for educational purposes with credit to the author. updated by CB on November 21, 2021
*/

$(function() {
    //runs the validation check on button click, if successful runs generate()
    $("#submit").click(function() {
        if ($("#numbers").valid())
           generate();
    });
    
    //selects all elements in the form "numbers" and validates off of the given rules
    $("#numbers").validate({
        rules: {
            firstLow: {
                required: true,         //field is required
                number: true,           //field must contain a number
                min: -50,               //mininum value is -50
                max: 50,                //maximum value is 50
            },
            firstHigh: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            secondLow: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            secondHigh: {
                required: true,
                number: true,
                min: -50,
                max: 50
            }
            
        }
    });
});

function generate (){

    //#####Creating variables, checking if numbers are valid#####

    //getting values from form
    var firstLow = document.getElementById("firstLow").value;
    var firstHigh = document.getElementById("firstHigh").value;
    var secondLow = document.getElementById("secondLow").value;
    var secondHigh = document.getElementById("secondHigh").value;

    //clearing form values
    document.getElementById("results").innerHTML = "";
    document.getElementById("firstLow").value = "";
    document.getElementById("firstHigh").value = "";
    document.getElementById("secondLow").value = "";
    document.getElementById("secondHigh").value = "";

    //swapping values if orders are wrong
    if(firstLow > firstHigh){
        var temp = firstHigh;
        firstHigh = firstLow;
        firstLow = temp;
    }
    if(secondLow > secondHigh){
        var temp2 = secondHigh;
        secondHigh = secondLow;
        secondLow = temp2;
    }

    //#####creating table#####
    //Adding blank element 
    addElement("", "th");

    //populating top header, starts calculations on new row
    for(i = firstLow; i <= firstHigh; i++){
        addElement(i, "th");
    }
    addElement("", "tr");

    //for loop to populate remainder of table, finishes on new row
    for(i = secondLow; i <= secondHigh; i++){  
        addElement(i, "th");

        for(j = firstLow; j <= firstHigh; j++){
            addElement(i * j, "td");
        }
        addElement("", "tr");
    }
}

//function to create table element
function addElement(content, type){
    var node = document.createElement(type);
    var textNode = document.createTextNode(content);
    node.appendChild(textNode);
    document.getElementById("results").appendChild(node);
}

