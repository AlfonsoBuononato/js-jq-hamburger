/* Hamburger menu Mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile). */

var hamburger = $(".fa-bars");
var menu = $(".hamburger-menu");
var chiusuraMenu = $(".fa-times")

hamburger.click(function(){
    menu.show();
});
chiusuraMenu.click(function(){
    menu.hide()
});