form materialize color set used colors
## Light mode colors
#00796b teal darken-2
#4527a0 deep-purple darken-3

## Dark mode colors
#212121 grey darken-4
#757575 grey darken-1
#616161 grey darken-2


## Extras colors
#0091ea light-blue accent-4
#9575cd deep-purple lighten-2

note
first grid in the site is - col s12 m12 l4 
this one is the final one - col s12 m6 l3

### nav bar design and orders list name

 <!-- add all the pwa usages in this page how to use-->
- [x]  How to use 

- [x]  About us / who are we
- [x]  All Features
- [x]  Favorites pages
- [x]  Login page  + (Sign up page)

Drop down
- [x]  Disclaimer
- [x]  Contact us - use google form
- [x]  Privacy policy -  iska  idea hai
- [x]  Terms and conditions - iska idea hai

<!-- <details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details> -->

### css for glass effect for cards 
/* Auto Layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 10px;

position: relative;
width: 301px;
height: 231px;

background: linear-gradient(109.37deg, rgba(255, 255, 255, 0.4) 12.9%, rgba(255, 255, 255, 0.1) 77.62%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.28);
backdrop-filter: blur(18px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 15px;


### icons to includes 
- favorite_border ->  
<!-- <i class="material-icons right">favorite_border</i> -->
- brightness_4
- brightness_7
- favorite
- notifications
- notifications_activenotifications_active
- notifications_nonenotifications_none
- notifications_offnotifications_off
- star
- star_borderstar_border


### jo lika hoga to idar likna 
-> use in exp.cal all elements 
- [] model for help preview 
- [] select /drop down for different currencys 
- [] Collapsible for history/income/expence 
- [] Chips for tags in expense
- [c] all types of text inputs for all the fields
- [x] cards for the hole content --- "failed"
- [] grids for the whole content inside init 
. tabs -- optinal 

Col s12 m7 l6 - for exp. Tracking title 
Col s12 m5 l6 - for ur bal , num, select
₹ $ £ ¥


code for the expense cal 
`code`

different currency selection
<!-- Currency selection -->
<!-- 
 <div class="container">
    <div class="row">
      <div class="col s12 m2 l1">
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            <option value="rs">₹</option>
            <option value="drs">$</option>
            <option value="eur">£</option>
            <option value="jpy">¥</option>
          </select>
          <label>Currency</label>
        </div>
      </div>
     </div>
  </div>

<a href="#" class="dropdown-trigger btn" data-target="currency">
      <i class="material-icons right">arrow_drop_down</i>Currency</a>

       <!-- dropdown for different currency -->
  <!-- <ul id="currency" class="dropdown-content">
    <li><a href="#">₹</a></li>
    <li><a href="#">$</a></li>
    <li><a href="#">£</a></li>
    <li><a href="#">¥</a></li>
  </ul>  -->

<!-- <section>
      <h3><b>Expense Tracker</b></h3>
      <p class="right-align"><b>Your Balance</b></p>
      <h2 class="right-align" id="balance">0.00</h2>
      <div class="input-field">
        <select>
          <option value="" disabled selected>Choose your Currency</option>
          <option value="1">₹</option>
          <option value="2">$</option>
          <option value="3">₤</option>
          <option value="4">¥</option>
          <option value="5">¢</option>
        </select>
        <label>Currency's select </label>
      </div>
</section> -->

- tabs code in todo list 
  <!-- tabs are created  -->
  <!-- <div class="center">
    <h2>todo list</h2>
    <ul class="tabs  z-depth-1" id="tabs-swipe">
      <li class="tab active"><a href="#tab-tasks">Tasks</a></li>
      <li class="tab"><a href="#tab-completed">Completed</a></li>
    </ul>
  </div> -->
<!-- 
<div class="white container">
  <div id="tab-tasks">
    <div class="input-field">
      <div class="input-field">
        <i class="material-icons prefix">text_fields</i>
        <input type="text" onfocus="this.value=''"  placeholder="What is your tasks ?" @keydown.enter="addToList()">
        <p  class="btn-floating btn-large waves-effect waves-light deep-purple darken-3 right" id="btnadd">
          <i class="material-icons">add</i></p>
    </div>
    fixme: have to under the code 
    <div class="collection">
      <uncompleted
        v-for="(item, index) in items"
        v-if="!item.done"
        v-bind:text="item.text"
        v-bind:done="item.done"
        v-bind:index="index"
        v-on:act-remove="removeFromList"
        v-on:act-update="updateStatus"
      ></uncompleted>
    </div>
    </div>
    <div id="tab-completed">
      <div class="collection">
        <completed
        v-for="(item, index) in items"
        v-if="item.done"
        v-bind:text="item.text"
        v-bind:done="item.done"
        v-bind:index="index"
        v-on:act-remove="removeFromList"
        v-on:act-update="updateStatus"
        ></completed>
      </div>
    </div>
  </div>
</div> -->


- local storage code 

$("#getName").on("click", event => {
  name = $("#myname").val();
  if (localStorage.hasOwnProperty(name)) {
    data = JSON.parse(localStorage.getItem(name));
    console.log(data);
  } else {
    data.name = name;
    localStorage.setItem(name, JSON.stringify(data));
  }

  $(".addmyname").css("display", "none");
  $(".navigate").css("display", "block");
  if (data.expense.length === 0) {
    $(".expenseDiv").css("display", "block");
  } else {
    $(".chart").css("display", "block");
    generateGraph();
    generateMonthbar();
  }
});


$("#addexpense").on("click", event => {
  var date = new Date($("#date").val());
  var amount = parseInt($("#amount").val());
  var Category = "";
  if ($("#catagory").val() == "type") {
    Category = $("#addcatagory").val();
  } else {
    Category = $("#catagory").val();
  }

  var expense = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    date: date,
    amount: amount,
    category: Category
  };
  if (data.categories.hasOwnProperty("" + Category + "")) {
    data.categories[Category].amount += parseInt(amount);
  } else {
    data.categories[Category] = {
      amount: parseInt(amount)
    };
  }
  data.expense.push(expense);
  localStorage.setItem(name, JSON.stringify(data));

  $("#date, #amount, #catagory").val("");
});


------

<--- js for todo list created by me --->

const container = document.querySelector('.collection-item');
var inputValue = document.querySelector('.input');
const add = document.querySelector('#btnadd');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

<!-- var t = '<li class="collection-item"> <i class="material-icons deep-purple-text text-darken-3 left">description</i> <div>' + task_title + '<a href="#!" class="secondary-content"><i class="material-icons red-text cdel" id="cdelete">delete_forever</i></a></div> </li>'; -->

class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name){
        var itemBox = document.createElement('li');
        itemBox.classList.add('collection-item');

        var icons =document.createElement('i')
        icons.classList.add('material-icons deep-purple-text text-darken-3 left');
        icons.value = description;
        
        var input = document.createElement('div');
        input.value = name;
        input.type = "text";
        input.classList.add('item_input');

        var a =document.createElement('a')
        a.classList.add('secondary-content');
        
        var remove = document.createElement('i');
    	remove.classList.add('material-icons red-text cdel');
        icons.value = delete_forever;
    	remove.innerHTML = "delete_forever";
    	remove.addEventListener('click', () => this.remove(itemBox, name));


        container.appendChild(itemBox);

        itemBox.appendChild(icons);
        itemBox.appendChild(input);
        itemBox.appendChild(a);
        itemBox.appendChild(remove);

    }

    remove(itemBox,name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}
---------