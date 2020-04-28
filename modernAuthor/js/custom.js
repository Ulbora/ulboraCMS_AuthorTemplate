
//var menuId = "";
var menuSelect = function(val){
    // console.log(val);
    //document.cookie = "menuId=" + val; 
    sessionStorage.setItem('menuId', val);
}


var setMenu = function(){
    // console.log(document.cookie);
    // console.log(window.location.pathname)
    
    var menuId = getCookieName(window.location.pathname);
    if (menuId === ""){
        var menuId = sessionStorage.getItem('menuId');//document.cookie   
        if(menuId === undefined || menuId === null || menuId === ""){
            menuId = "m1";
        }
    }    
    document.cookie = window.location.pathname+ "=" + menuId; 
    document.getElementById(menuId).className = "active item";
}

var getCookieName= function(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}