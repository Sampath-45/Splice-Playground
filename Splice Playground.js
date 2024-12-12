let arr = [1, 7, 3, 1, 0, 20, 77];


let startInputEl = document.getElementById("startIndexInput");
let deleteInputEl = document.getElementById("deleteCountInput");
let addInputEl = document.getElementById("itemToAddInput");
let But = document.getElementById("spliceBtn");
let newArray = document.getElementById("updatedArray");

function stringifiedArray() {
    let stringifiedArrayVal = JSON.stringify(arr);
    newArray.textContent = stringifiedArrayVal;
}

stringifiedArray();

But.onclick = function() {
    let startVal = startInputEl.value;
    let deleteVal = deleteInputEl.value;
    let addVal = addInputEl.value;

    if (startVal === "") {
        alert("Please enter start index");
        return;
    }
    if (deleteVal === "") {
        deleteVal = 0;
    }
    if (addVal === "") {
        arr.splice(startVal, deleteVal);
    } else {
        arr.splice(startVal, deleteVal, addVal);
    }
    startInputEl.value = "";
    deleteInputEl.value = "";
    addInputEl.value = "";
    stringifiedArray();
}