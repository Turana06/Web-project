let button = document.querySelector("button");

button.addEventListener("click", () => {
   let spanTag = "";
   let input1 = document.getElementById("input-1").value;
   switch (input1) {
      case "Lexus": spanTag = "Yaponiyada istehsal olunan premium avtomobil markasıdır."; break;
      case "Bugatti": spanTag = "Dünyanın ən bahalı avtomobili statusunu qazanıb."; break;
      case "Toyota": spanTag = " “Toyota” şirkəti dünyada ən çox avtomobil istehsal edən şirkətdir."; break;
      case "BMW": spanTag = "Almaniya istehsalıdır."; break;
      default: spanTag = "Yanlış məlumat"; break;
   }

   document.getElementById("result").innerHTML = spanTag;
      input1 = document.getElementById("input-1").value = "";


});