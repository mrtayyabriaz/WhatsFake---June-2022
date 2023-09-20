let greenmessagediv14 = document.getElementById("greenmessagediv14");
let whitemessagediv14 = document.getElementById("whitemessagediv14");
greenmessagediv14.style.display = "none";
whitemessagediv14.style.display = "none";

function setpos14() {
  greenmessagediv14.style.top = pos;
  whitemessagediv14.style.top = pos;
  // greenmessagediv14.style.display = "block";
  whitemessagediv14.style.display = "block";
  console.log(pos);
  defaultdateposition = pos;
}
//add date box 14
let date14 = document.getElementById("date14");
date14.style.display = "none";

function adddate14() {
  date14.style.display = "block";
  date14 = document.getElementById("date14");
  let setdate14 = document.getElementById("setdate14");
  date14.innerHTML = setdate14.value;
  date14.style.top = pos;
  if (pos.length == 5) {
    pos = pos.slice(0, 3);
    pos = parseInt(pos);
    pos = pos + 40;
    pos = pos + "px";
    console.log(pos);
  } else if (pos.length == 4) {
    pos = pos.slice(0, 2);
    pos = parseInt(pos);
    pos = pos + 40;
    pos = pos + "px";
    console.log(pos);
  }
  greenmessagediv14.style.top = pos;
  whitemessagediv14.style.top = pos;
  // if (pos.length == 5) {
  //     pos = pos.slice(0, 3);
  //     pos = parseInt(pos);
  //     pos = pos + 40;
  //     pos = pos + "px";
  //     console.log(pos);
  // }
  // else if (pos.length == 4) {

  //     pos = pos.slice(0, 2);
  //     pos = parseInt(pos);
  //     pos = pos + 40;
  //     pos = pos + "px";
  //     console.log(pos);
  // }
}
function findpos14() {
  // if (pos == defaultdateposition) {
  if (pos.length == 5) {
    pos = pos.slice(0, 3);
    pos = parseInt(pos);
    pos = pos + 40;
    pos = pos + "px";
    console.log(pos);
  } else if (pos.length == 4) {
    pos = pos.slice(0, 2);
    pos = parseInt(pos);
    pos = pos + 40;
    pos = pos + "px";
    console.log(pos);
    // }
  }
}

// green white switch buttton function
let wtext14 = document.getElementById("whitetext14");
let setgmessage14 = document.getElementById("setgmessage14");
let gtext14 = document.getElementById("greentext14");
let setwmessage14 = document.getElementById("setwmessage14");
let checkbox14 = document.getElementById("gwchkbox14");
let greentime14 = document.getElementById("greentime14");
let whitetime14 = document.getElementById("whitetime14");
let datediv14 = document.getElementById("datediv14");
let radiodiv14 = document.getElementById("radiodiv14");

let add_green_message_button14 = document.getElementById(
  "add_green_message_button14"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
/* green display none by deafult*/
gtext14.style.display = "none";
wtext14.style.display = "block";
setwmessage14.style.display = "none";
radiodiv14.style.display = "none";
greentime14.style.display = "none";
greenmessagediv14.style.display = "none";
// add_green_message_button14.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv14 = document.getElementById("greenmessagediv14");
greenmessagediv14.style.top = "90px";
whitemessagediv14.style.top = "90px";

// check  main function
function check_box_function14() {
  if (checkbox14.checked == true) {
    wtext14.style.display = "none"; // white none
    setwmessage14.style.display = "none";
    whitetime14.style.display = "none";
    whitemessagediv14.style.display = "none";
    gtext14.style.display = "block"; //green block
    greenmessagediv14.style.display = "block";
    greentime14.style.display = "block";
    add_green_message_button14.style.display = "block";
    setgmessage14.style.display = "block";
    radiodiv14.style.display = "flex";
    add_green_message_button14.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext14.style.display = "block"; // white block
    // setwmessage14.style.display = "block";
    // whitetime14.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv14.style.display = "block";
    gtext14.style.display = "none"; //green none
    // greentime14.style.display = "none";
    // setgmessage14.style.display = "none";
    // add_green_message_button14.style.display = "none";
    greenmessagediv14.style.display = "none";
    radiodiv14.style.display = "none";
    add_green_message_button14.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick14").style.display = "none";
document.getElementById("bluetick14").style.display = "none";
selected14 = "single14";
function findselected14() {
  selected14 = document.querySelector("input[name='tick14']:checked").value;
  // console.log(selected14);
  document.getElementById("singletick14").checked = true;

  if (selected14 == "single14") {
    document.getElementById("singletick14").style.display = "block";
    document.getElementById("doubletick14").style.display = "none";
    document.getElementById("bluetick14").style.display = "none";
  }
  if (selected14 == "double14") {
    document.getElementById("singletick14").style.display = "none";
    document.getElementById("doubletick14").style.display = "block";
    document.getElementById("bluetick14").style.display = "none";
  }
  if (selected14 == "blue14") {
    document.getElementById("singletick14").style.display = "none";
    document.getElementById("doubletick14").style.display = "none";
    document.getElementById("bluetick14").style.display = "block";
  }
}
radio14 = document.querySelectorAll('input[name="tick14"]');
radio14.forEach((radio14) => {
  radio14.addEventListener("change", findselected14);
});

// messages data | messages data | messages data | messages data | messages data | messages data |

function add_green_message14() {
  // green message

  gmessage14 = document.getElementById("gmessage14");
  gmessage14.innerText = setgmessage14.value;
  wmessage14 = document.getElementById("wmessage14");
  wmessage14.innerText = setgmessage14.value;
  extrapx = setgmessage14.value;
  if (extrapx.length > 28)
    if (pos.length == 5) {
      pos = pos.slice(0, 3);
      pos = parseInt(pos);
      pos = pos + 20;
      pos = pos + "px";
      console.log(pos);
    } else if (pos.length == 4) {
      pos = pos.slice(0, 2);
      pos = parseInt(pos);
      pos = pos + 20;
      pos = pos + "px";
      console.log(pos);
    }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
let gt;
function gtime14(gt) {
  // let time = document.getElementById("setmessagetime");
  if (gt.value !== "") {
    toString(gt);
    let hours = gt.slice(0, 2);
    let min = gt.slice(3, 5);
    let paradigm = "AM";
    let h1 = hours.slice(0, 1);
    let h2 = hours.slice(1, 2);
    if (h1 == 0) {
      h1 = "";
    }
    let h = h1 + h2;
    if (h > 12) {
      h = h - 12;
      paradigm = "PM";
    }
    gt = h + ":" + min + " " + paradigm;
    document.getElementById("gmessagetime14").innerHTML = gt;
    document.getElementById("wmessagetime14").innerHTML = gt;
  }
}
