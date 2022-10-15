// initialize on load
$(document).ready(function() {
    $(".datepicker").datepicker();
    $("select").formSelect();
  });

// var ini...
var bgcolor2 = [];
var name = "";
var data = {};
data.expense = [];
data.categories = {};


// Ass for custome category
$("#catagory").change(event => {
  if ($("#catagory").val() == "type") {
    $("#typemo").css("display", "block");
  } else {
    $("#typemo").css("display", "none");
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

$("#filtermonths").on("click", event => {
  $("#filterd")
    .removeClass("white-text")
    .addClass("grey-text")
    .addClass("text-lighten-1");
  $("#filterm")
    .removeClass("grey-text")
    .removeClass("text-lighten-1")
    .addClass("white-text");
  $("#filterbar").text("Monthly");
  // generate graph by months
  generateMonthbar();
});

$("#filterdays").on("click", event => {
  $("#filterm")
    .removeClass("white-text")
    .addClass("grey-text")
    .addClass("text-lighten-1");
  $("#filterd")
    .removeClass("grey-text")
    .removeClass("text-lighten-1")
    .addClass("white-text");
  $("#filterbar").text("Daily");
  // generate graph by days
  generateDaybar();
});

var generateMonthbar = () => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var expensesMonths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  data.expense.forEach(exp => {
    expensesMonths[exp.month - 1] += parseInt(exp.amount);
  });

  // generate random color
  for (let i = 0; i < months.length; i++) {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var c = 0; c < 6; c++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    bgcolor2.push(color);
  }
  $("#filterbar").text("Monthly");
  if (typeof newChartbar !== "undefined") removeData(newChartbar);
  var ctx2 = $("#myChartbar");
  var newChartbar = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Expense",
          data: expensesMonths,
          backgroundColor: bgcolor2,
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true
    }
  });
  addData(newChartbar, months, expensesMonths);
};

var generateDaybar = () => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var expensesDays = [0, 0, 0, 0, 0, 0, 0];
  data.expense.forEach(exp => {
    var day = new Date(exp.date).getDay();
    expensesDays[day] += parseInt(exp.amount);
  });

  for (let i = 0; i < days.length; i++) {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var c = 0; c < 6; c++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    bgcolor2.push(color);
  }

  if (typeof newChartbar !== "undefined") removeData(newChartbar);
  var ctx2 = $("#myChartbar");
  var newChartbar = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          label: "Expense",
          data: expensesDays,
          backgroundColor: bgcolor2,
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true
    }
  });
  addData(newChartbar, days, expensesDays);
};

var generateGraph = () => {
  var label = [];
  var amount = [];
  var bgcolor = [];

  for (var k in data.categories) label.push(k);
  for (var i = 0; i < label.length; i++) {
    amount.push(parseInt(data.categories[label[i]].amount));
  }
  for (let i = 0; i < label.length; i++) {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var c = 0; c < 6; c++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    bgcolor.push(color);
  }

  // console.log(label);
  // console.log(amount);
  if (typeof newChart !== "undefined") removeData(newChart);
  var ctx = $("#myChartpie");
  var newChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: label,
      datasets: [
        {
          label: "Total Expense",
          data: amount,
          backgroundColor: bgcolor,
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true
    }
  });
  addData(newChart, label, amount);

  // console.log(label);
  // console.log(amount);
};

var showTable = () => {
  var table = [];
  data.expense.forEach(exp => {
    let i = 0;
    let getdate = new Date(exp.date);
    let fulldate =
      getdate.getDate() +
      "/" +
      parseInt(getdate.getMonth() + 1) +
      "/" +
      getdate.getFullYear();
    var list = {
      date: fulldate,
      amount: parseInt(exp.amount),
      category: exp.category
    };
    table.push(list);

    table.forEach(t => {
      $("#addrows").append(
        "<tr><td>" +
          ++i +
          "</td><td>" +
          t.date +
          "</td><td>" +
          "₹" +
          t.amount +
          "</td><td>" +
          t.category +
          "</td></tr>"
      );
    });
  });
};
