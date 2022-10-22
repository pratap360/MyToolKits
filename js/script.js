$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".slider").slider({ full_width: true });
    $(".dropdown-trigger").dropdown({ hover: false });
    $('.modal').modal();
    $('.collapsible').collapsible();  
    $('select').formSelect(); 
    $('.tabs').tabs();
    // $('.datepicker').datepicker(); 
    $('.chips').chips();
    $('.light-dark-mode').on('click', lightDarkMode);

    if(localStorage.getItem('dark-mode')){
        document.body.classList.add('dark-mode');
    }
});

function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}

function lightDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(element.classList.contains("dark-mode")){
        localStorage.setItem('dark-mode',true);
    } else {
        localStorage.removeItem('dark-mode');
    }
}