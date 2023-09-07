// Create a new list item when clicking on the "Add" button

function addListItem() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("newInput").value;
    var t = document.createTextNode(inputValue);
    
    li.appendChild(t);
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("newList").appendChild(li);
    }
    
    document.getElementById("newInput").value = "";
    }