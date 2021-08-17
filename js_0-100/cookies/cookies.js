
document.cookie = "user=John"; // update only cookie named 'user'
document.cookie = "firscookie"
alert(document.cookie); // show all cookies

//Así generamos una fecha o tiempo para que la cookie expire.
//con expires=FORMATO-GMTString
document.cookie = "sessionid=494741684,expires="
