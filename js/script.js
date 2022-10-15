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
});

function toggleModal() {
    var instance = M.Modal.getInstance($("#modal3"));
    instance.open();
}