// Get Elements

var inp = document.getElementById('inp-Text');
var btn = document.getElementById('inp-Btn');
var box = document.getElementById('list-Box');
var arr = (readData()) ? [...readData()] : []; // save previuse Data from function readData() & "||" use when the " arr " is empty
// { (readData())? [...readData()] : [] this condition : ternary operator
// (readData())? [...readData()] = if();
// : [] = else; }

var theDate = new Date();

// function

function completeItem(e, code) { // no :9

    for(var i = 0; i < arr.length; i++){
        if(arr[i].id == code){

            e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through';
            
            e.target.previousElementSibling.previousElementSibling.style.display="none";
            e.target.style.display="none";
        }
    }
}

function deleteItem(e, id) { // no :8
    console.log(e.target);
    console.log(id)

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            console.log(delete true);
            e.target.parentNode.remove()
            console.log(e.target.parentNode)
        }
    }
}

function updataItem(e, check) { // no :7
    var editInp = e.target.previousElementSibling.previousElementSibling.value;
    console.log(e.target);
    console.log(check);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == check) {
            // arr[i] = [...arr[i], listText = editInp]
            e.target.previousElementSibling.previousElementSibling.style.display = "none";
            e.target.previousElementSibling.style.display = "block";
            e.target.previousElementSibling.innerText = editInp;
            e.target.innerText = "edit";
            e.target.nextElementSibling.style.display = "block";
        }
        else {
            // arr[i] = [...arr[i]];
        }
    }
}

function editItem(e, id) { // no :6

    console.log(e.target);
    console.log(id);
    e.target.previousElementSibling.style.display = "none";
    e.target.previousElementSibling.previousElementSibling.style.display = "block";
    e.target.nextElementSibling.style.display = "none";
    e.target.innerHTML = "Save";
    e.target.setAttribute('onClick', `updataItem(event, '${id}')`)
}

function renderListItem() { // no :5

    for (var i = 0; i < arr.length; i++) {
        box.innerHTML += `<div class="list-Div" id="">
        <input type="text" value="${arr[i].listText}" class="editInputBtn">
        <p>${arr[i].listText}</p>
        <button onClick="editItem(event, '${arr[i].id}')">edit</button>
        <button onClick="deleteItem(event, '${arr[i].id}')">Del</button>
        <button onClick="completeItem(event, '${arr[i].id}')">Complete</button>
        </div>`;
    }
}

function readData() { // no :4
    return JSON.parse(localStorage.getItem('To_Do Item'));
}

function saveData(data) { // no :3 save Data in LocalStorage
    // console.log(data);
    localStorage.setItem('To_Do Item', JSON.stringify(data));

    box.innerHTML = ""; // when we add any thung in LocalStorage it will not add that Data into New Data 
    renderListItem() // when we call saveData() this function "renderListItem()" also call here here & render Data every Time we input any Data
}

function ListData(itemValue) { // no :2 , create a constructor function
    // console.log(itemValue);
    this.listText = itemValue;
    this.id = Math.floor(Math.random() * 100) + Number(theDate.getTime().toString().slice(-5));
}

function submitInput(e) { // no :1,
    e.preventDefault();

    var obj = new ListData(inp.value); // call the constructor function & pass Value
    arr = [...arr, obj]; // push the obj using spread Operator
    saveData(arr);
    console.log(arr);

    inp.value = "";
}

// localStorage.removeItem("To_Do Item");