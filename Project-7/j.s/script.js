window.addEventListener("load", myOclock=()=>{
   let time = new Date();

   let hour = time.getHours();
   let minute = time.getMinutes();
   let second = time.getSeconds();

   hour = hour < 10 ? "0" + hour : hour;
   minute = minute < 10 ? "0" + minute : minute;
   second = second < 10 ? "0" + second : second;


   let day = time.getDate();
   let month = time.getMonth();
   let year = time.getFullYear();

   
   month = month < 10 ? "0" + (month + 1) : month;
   

   document.getElementById("hour").innerHTML = hour + " :";
   document.getElementById("minute").innerHTML = minute + " :";
   document.getElementById("second").innerHTML = second;

   let interval = setInterval(myOclock ,1000);

   document.querySelector(".date").innerHTML = day + " /" +  month + " /"  + year;
   
});













