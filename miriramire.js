50 - BASE DECODE II
Site: World-of-wargame
Challenge code: 50

Score
  Initial: 1219, Final: 1290, Progress: 71
Global Rank
  Initial: 4513, Final: 4494, Progress: 19
National Rank:
  Initial: 219, Final: 217, Progress: 2

(master) $ git diff
diff --git a/miriramire.js b/miriramire.js
--- a/miriramire.js
+++ b/miriramire.js
function myFunction() {
    var str = "";
    var cont  = 30;
    var mensaje;
    for(var i=0; i<cont;i++){
      var str = reverseString(str);
      var enc = window.atob(str);
      var res = "Encoded String: " + enc;
      mensaje = "The original string: " + str + "<br>" + res + "<br>";
      var str = enc;
    }
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    alert(mensaje);
}
myFunction();
