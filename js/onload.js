
$(function(){
//make menus drop down on hover
$('ul.nav li.dropdown').hover(function() {
    $('.dropdown-menu', this).fadeIn('fast');
    }, function(){
    $('.dropdown-menu', this).fadeOut('fast');
    });//hover
});// jQuery is loaded