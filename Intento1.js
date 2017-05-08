<script>
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
</script>
