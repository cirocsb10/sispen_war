$(document).ready(function() {

    /* Enable twitter bootstrap dropdown menu */
	$('.dropdown-toggle').dropdown();

    /* Enable tabs collapse in large forms */
    $(".collapse").collapse();

    /* Show tooltip on mouse over icons */
    $(".btn-email, .btn-edit, .btn-delete, .btn-tooltip").live("mouseover", function (event) {
        $(this).tooltip('show')
    });

    /* Run to the top page form */
    $('.top').click(function(){
        $('html,body').animate({scrollTop: 0},'fast');
    });

    /* Fade Out info message */
    setTimeout(function(){
        $('.list-msg').fadeOut("slow");
    }, 2000);

    /* Submit popup form on keypress enter button */
    $("#form-register").live("keypress", function (event) {
        if (event.keyCode == 13){
            $('#form-register a.btn-submit').click();
            return false;
        }
    });

    /* Remove css class primefaces */
    $("input").live("click", function (event) {
        $(this).removeClass('ui-state-hover');
    });

    /* Remove css class primefaces */
    $("input").live("hover", function (event) {
        $(this).removeClass('ui-state-hover');
    });

});

/* Reset input secrets */
function resetInputSecrets() {
    $('.input-current-password').attr('value','');
    $('.input-new-password').attr('value','');

    $('.input-current-password').attr('placeholder', 'Digite a senha atual')
    $('.input-new-password').attr('placeholder', 'Digite a nova senha')
}