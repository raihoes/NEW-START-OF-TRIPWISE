function calculateBudget() {

    let flight = parseInt(document.getElementById("flight").value);
    let hotel = parseInt(document.getElementById("hotel").value);
    let food = parseInt(document.getElementById("food").value);
    let transport = parseInt(document.getElementById("transport").value);
    let activities = parseInt(document.getElementById("activities").value);

    if (document.getElementById("flight").value == "") {
        flight = 0;
    }

    if (document.getElementById("hotel").value == "") {
        hotel = 0;
    }

    if (document.getElementById("food").value == "") {
        food = 0;
    }

    if (document.getElementById("transport").value == "") {
        transport = 0;
    }

    if (document.getElementById("activities").value == "") {
        activities = 0;
    }

    let sum = flight + hotel + food + transport + activities;

    document.getElementById("totalCost").innerHTML = "$" + sum;

}

