let number1 = document.getElementById("message1");
let number2 = document.getElementById("message2");
let number3 = document.getElementById("message3");
let number4 = document.getElementById("message4");
let number5 = document.getElementById("message5");
let number6 = document.getElementById("message6");
let number7 = document.getElementById("message7");
let number8 = document.getElementById("message8");
let number9 = document.getElementById("message9");
let number10 = document.getElementById("message10");
let number11 = document.getElementById("message11");
let number12 = document.getElementById("message12");
let number13 = document.getElementById("message13");
let number14 = document.getElementById("message14");
let mr1 = document.getElementById("mr1");
let mr2 = document.getElementById("mr2");
let mr3 = document.getElementById("mr3");
let mr4 = document.getElementById("mr4");
let mr5 = document.getElementById("mr5");
let mr6 = document.getElementById("mr6");
let mr7 = document.getElementById("mr7");
let mr8 = document.getElementById("mr8");
let mr9 = document.getElementById("mr9");
let mr10 = document.getElementById("mr10");
let mr11 = document.getElementById("mr11");
let mr12 = document.getElementById("mr12");
let mr13 = document.getElementById("mr13");
let mr14 = document.getElementById("mr14");
// mr2.style.display = "none"
// mr3.style.display = "none";
// mr4.style.display = "none";
// mr5.style.display = "none";
// mr6.style.display = "none";
// mr7.style.display = "none";
// mr8.style.display = "none";
// mr9.style.display = "none";
// mr10.style.display = "none";
// mr11.style.display = "none";
// mr12.style.display = "none";
// mr13.style.display = "none";
// mr14.style.display = "none";
number2.style.display = "none";
number3.style.display = "none";
number4.style.display = "none";
number5.style.display = "none";
number6.style.display = "none";
number7.style.display = "none";
number8.style.display = "none";
number9.style.display = "none";
number10.style.display = "none";
number11.style.display = "none";
number12.style.display = "none";
number13.style.display = "none";
number14.style.display = "none";
let msgnumber = "mr1";
mr1.style.display = "none";
function findmessagenumber() {
  msgnumber = document.querySelector("input[name='mradio']:checked").value;
  // console.log(selected);

  if (msgnumber == "mr1") {
    number1.style.display = "block";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number6.style.display = "none";
    mr2.style.display = "flex";
  }
  if (msgnumber == "mr2") {
    number1.style.display = "none";
    number2.style.display = "block";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number6.style.display = "none";
    mr1.style.display = "none";
    mr2.style.display = "none";
    mr3.style.display = "flex";
  }
  if (msgnumber == "mr3") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "block";
    number4.style.display = "none";
    number5.style.display = "none";
    number6.style.display = "none";
    mr2.style.display = "none";
    mr3.style.display = "none";
    mr4.style.display = "flex";
  }
  if (msgnumber == "mr4") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "block";
    number5.style.display = "none";
    number6.style.display = "none";
    mr3.style.display = "none";
    mr4.style.display = "none";
    mr5.style.display = "flex";
  }
  if (msgnumber == "mr5") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "block";
    mr4.style.display = "none";
    mr5.style.display = "none";
    mr6.style.display = "flex";
  }
  if (msgnumber == "mr6") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number6.style.display = "block";
    mr5.style.display = "none";
    mr6.style.display = "none";
    mr7.style.display = "flex";
  }
  if (msgnumber == "mr7") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number6.style.display = "none";
    number7.style.display = "block";
    mr6.style.display = "none";
    mr7.style.display = "none";
    mr8.style.display = "flex";
  }
  if (msgnumber == "mr8") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number6.style.display = "none";
    number7.style.display = "none";
    number8.style.display = "block";
    number9.style.display = "none";
    number10.style.display = "none";
    mr7.style.display = "none";
    mr8.style.display = "none";
    mr9.style.display = "flex";
  }
  if (msgnumber == "mr9") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number8.style.display = "none";
    number9.style.display = "block";
    mr8.style.display = "none";
    mr9.style.display = "none";
    mr10.style.display = "flex";
  }
  if (msgnumber == "mr10") {
    number1.style.display = "none";
    number2.style.display = "none";
    number3.style.display = "none";
    number4.style.display = "none";
    number5.style.display = "none";
    number9.style.display = "none";
    number10.style.display = "block";
    mr9.style.display = "none";
    mr10.style.display = "none";
    mr11.style.display = "flex";
  }
  if (msgnumber == "mr11") {
    number9.style.display = "none";
    number11.style.display = "block";
    number10.style.display = "none";
    mr10.style.display = "none";
    mr11.style.display = "none";
    mr12.style.display = "flex";
  }
  if (msgnumber == "mr12") {
    number11.style.display = "none";
    number12.style.display = "block";
    number10.style.display = "none";
    mr11.style.display = "none";
    mr12.style.display = "none";
    mr13.style.display = "flex";
  }
  if (msgnumber == "mr13") {
    number12.style.display = "none";
    number13.style.display = "block";
    number10.style.display = "none";
    mr12.style.display = "none";
    mr13.style.display = "none";
    mr14.style.display = "flex";
  }
  if (msgnumber == "mr14") {
    number13.style.display = "none";
    number14.style.display = "block";
    // number10.style.display = "none";
    mr13.style.display = "none";
    mr14.style.display = "none";
    // mr15.style.display = "flex";
  }
}
let messageradio = document.querySelectorAll('input[name="mradio"]');
messageradio.forEach((messageradio) => {
  messageradio.addEventListener("change", findmessagenumber);
});

// walpaper height

// let walpaper = document.getElementById("walpaper");
// function walpapaer_height() {
//     if(pos)
//     walpaper.style.height = "800px";
// }
