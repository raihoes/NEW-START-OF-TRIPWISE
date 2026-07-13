let input = "";

function updateString(value) {

    input = input + value;

    document.getElementById("inputString").value = input;

}

function calculate() {

    let result = eval(input);

    document.getElementById("inputString").value = result;

    input = "";

}

function resetString() {

    input = "";

    document.getElementById("inputString").value = "";

}
