$(document).ready(function () {
    $("#btnadd").click(function () {
        // console.log("button clicked");
        $('.modal').modal();
    });
});


const container = document.querySelector('.containerj');
var inputValue = document.querySelector('.inputj');
const add = document.querySelector('#addclick');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        
        var listitems = document.createElement('li');
        listitems.className = 'collection-item';

        var icon1 = document.createElement('i');
        icon1.className = 'material-icons deep-purple-text text-darken-3 left';
        icon1.innerHTML = "description";


        var taskname = document.createElement('div');
        taskname.innerHTML = name;

        var remove = document.createElement('i');
        remove.className = 'material-icons red-text cdel right';
        remove.innerHTML = 'delete_forever';
        remove.addEventListener('click', () => this.remove(listitems, name));

        container.appendChild(listitems);
        listitems.appendChild(icon1);
        listitems.appendChild(taskname);
        
        taskname.appendChild(remove);

        

    }

    
    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}


for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}