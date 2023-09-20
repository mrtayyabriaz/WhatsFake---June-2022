let greenmessagediv2 = document.getElementById("greenmessagediv2");
let whitemessagediv2 = document.getElementById("whitemessagediv2");

greenmessagediv2.style.display = "none";
whitemessagediv2.style.display = "none";

defaultdateposition = 2;
function setpos2() {
  textlength = 40;
  sectextlength = 40;
  greenmessagediv2.style.top = pos;
  whitemessagediv2.style.top = pos;
  // greenmessagediv2.style.display = "block";
  whitemessagediv2.style.display = "block";
  console.log(pos);
  // defaultdateposition = pos;
  console.log(pos);
}
//add date box 2
let date2 = document.getElementById("date2");
date2.style.display = "none";

function adddate2() {
  if (defaultdateposition == 2) {
    date2.style.display = "block";
    date2 = document.getElementById("date2");
    let setdate2 = document.getElementById("setdate2");
    date2.innerHTML = setdate2.value;
    date2.style.top = pos;
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
    } else if (pos.length == 6) {
      pos = pos.slice(0, 4);
      pos = parseInt(pos);
      pos = pos + 40;
      pos = pos + "px";
      console.log(pos);
    }
    greenmessagediv2.style.top = pos;
    whitemessagediv2.style.top = pos;
    defaultdateposition = 3;
  }
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
function findpos2() {
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
  } else if (pos.length == 6) {
    pos = pos.slice(0, 4);
    pos = parseInt(pos);
    pos = pos + 40;
    pos = pos + "px";
    console.log(pos);
  }

  // }
}

// green white switch buttton function
let wtext2 = document.getElementById("whitetext2");
let setgmessage2 = document.getElementById("setgmessage2");
let gtext2 = document.getElementById("greentext2");
// let setwmessage2 = document.getElementById("setwmessage2");
let checkbox2 = document.getElementById("gwchkbox2");
let greentime2 = document.getElementById("greentime2");
let whitetime2 = document.getElementById("whitetime2");
let datediv2 = document.getElementById("datediv2");
let radiodiv2 = document.getElementById("radiodiv2");

let add_green_message_button2 = document.getElementById(
  "add_green_message_button2"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext2.style.display = "none";
wtext2.style.display = "block";
// setwmessage2.style.display = "none";
radiodiv2.style.display = "none";
greentime2.style.display = "none";
greenmessagediv2.style.display = "none";
// add_green_message_button2.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv2 = document.getElementById("greenmessagediv2");
greenmessagediv2.style.top = "80px";
whitemessagediv2.style.top = "80px";

// check  main function
function check_box_function2() {
  if (checkbox2.checked == true) {
    wtext2.style.display = "none"; // white none
    // setwmessage2.style.display = "none";
    whitetime2.style.display = "none";
    whitemessagediv2.style.display = "none";
    gtext2.style.display = "block"; //green block
    greenmessagediv2.style.display = "block";
    greentime2.style.display = "block";
    add_green_message_button2.style.display = "block";
    setgmessage2.style.display = "block";
    radiodiv2.style.display = "flex";
    add_green_message_button2.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext2.style.display = "block"; // white block
    // setwmessage2.style.display = "block";
    // whitetime2.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv2.style.display = "block";
    gtext2.style.display = "none"; //green none
    // greentime2.style.display = "none";
    // setgmessage2.style.display = "none";
    // add_green_message_button2.style.display = "none";
    greenmessagediv2.style.display = "none";
    radiodiv2.style.display = "none";
    add_green_message_button2.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick2").style.display = "none";
document.getElementById("bluetick2").style.display = "none";
selected2 = "single2";
function findselected2() {
  selected2 = document.querySelector("input[name='tick2']:checked").value;
  // console.log(selected2);
  document.getElementById("singletick2").checked = true;

  if (selected2 == "single2") {
    document.getElementById("singletick2").style.display = "block";
    document.getElementById("doubletick2").style.display = "none";
    document.getElementById("bluetick2").style.display = "none";
  }
  if (selected2 == "double2") {
    document.getElementById("singletick2").style.display = "none";
    document.getElementById("doubletick2").style.display = "block";
    document.getElementById("bluetick2").style.display = "none";
  }
  if (selected2 == "blue2") {
    document.getElementById("singletick2").style.display = "none";
    document.getElementById("doubletick2").style.display = "none";
    document.getElementById("bluetick2").style.display = "block";
  }
}
radio2 = document.querySelectorAll('input[name="tick2"]');
radio2.forEach((radio2) => {
  radio2.addEventListener("change", findselected2);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage2");
var calculateContentHeight = function (ta1, scanAmount2) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount2 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount2) + "px";
      }
      while (ta1.offsetHeight < ta1.scrollHeight) {
        ta1.style.height = height++ + "px";
      }
      ta1.style.height = origHeight;
      ta1.style.overflow = overflow;
      return height;
    }
  } else {
    return scrollHeight;
  }
};
var calculateHeight2 = function () {
  var ta1 = document.getElementById("setgmessage2"),
    style = window.getComputedStyle
      ? window.getComputedStyle(ta1)
      : ta1.currentStyle,
    ta1LineHeight = parseInt(style.lineHeight, 10),
    ta1Height = calculateContentHeight(ta1, ta1LineHeight),
    numberOfLines = Math.ceil(ta1Height / ta1LineHeight);
  textlength = numberOfLines;
  console.log("there are " + numberOfLines + " lines in the text area");
  // console.log(textlength);
};

function add_green_message2() {
  // green message

  gmessage2 = document.getElementById("gmessage2");
  wmessage2 = document.getElementById("wmessage2");
  gmessage2.innerText = setgmessage2.value;
  wmessage2.innerText = setgmessage2.value;
  if (textlength != sectextlength) {
    if (sectextlength == 2) {
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos - 20;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos - 20;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos - 20;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (sectextlength == 3) {
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos - 40;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos - 40;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos - 40;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (sectextlength == 4) {
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos - 60;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos - 60;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos - 60;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (sectextlength == 5) {
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos - 80;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos - 80;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos - 80;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (sectextlength == 6) {
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos - 100;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos - 100;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos - 100;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (sectextlength == 7) {
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos - 120;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos - 120;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos - 120;
        pos = pos + "px";
        console.log(pos);
      }
    }

    if (textlength == 2) {
      sectextlength = 2;
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
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos + 20;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (textlength == 3) {
      sectextlength = 3;
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
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos + 40;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (textlength == 4) {
      sectextlength = 4;
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos + 60;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos + 60;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos + 60;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (textlength == 5) {
      sectextlength = 5;
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos + 80;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos + 80;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos + 80;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (textlength == 6) {
      sectextlength = 6;
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos + 100;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos + 100;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos + 100;
        pos = pos + "px";
        console.log(pos);
      }
    } else if (textlength == 7) {
      sectextlength = 7;
      if (pos.length == 5) {
        pos = pos.slice(0, 3);
        pos = parseInt(pos);
        pos = pos + 120;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 4) {
        pos = pos.slice(0, 2);
        pos = parseInt(pos);
        pos = pos + 120;
        pos = pos + "px";
        console.log(pos);
      } else if (pos.length == 6) {
        pos = pos.slice(0, 4);
        pos = parseInt(pos);
        pos = pos + 100;
        pos = pos + "px";
        console.log(pos);
      }
    }
  }
  if (setgmessage.value.length > 24) {
    document.getElementById("gbubblediv2").style.paddingRight = "0px";
    document.getElementById("gbubblediv2").style.marginBottom = "12px";
    document.getElementById("gbubblediv2").style.marginRight = "10px";
    document.getElementById("wbubblediv2").style.paddingRight = "0px";
    document.getElementById("wbubblediv2").style.marginBottom = "12px";
    document.getElementById("wbubblediv2").style.marginRight = "10px";
    document.getElementById("gmessagetime2").style.right = "-0px";
    document.getElementById("gmessagetime2").style.top = "-4px";
    document.getElementById("wmessagetime2").style.right = "-11px";
    document.getElementById("wmessagetime2").style.top = "-16px";
    document.getElementById("gnoke2").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv2").style.paddingRight = "70px";
    document.getElementById("gbubblediv2").style.marginBottom = "0px";
    document.getElementById("gbubblediv2").style.marginRight = "0px";
    document.getElementById("wbubblediv2").style.paddingRight = "50px";
    document.getElementById("wbubblediv2").style.marginBottom = "0px";
    document.getElementById("wbubblediv2").style.marginRight = "0px";
    document.getElementById("gmessagetime2").style.right = "-52px";
    document.getElementById("gmessagetime2").style.top = "-7px";
    document.getElementById("wmessagetime2").style.right = "-55px";
    document.getElementById("wmessagetime2").style.top = "-7px";
    document.getElementById("gnoke2").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime2(gt) {
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
    document.getElementById("gmessagetime2").innerHTML = gt;
    document.getElementById("wmessagetime2").innerHTML = gt;
  }
}

// // white time function
// wt;
// function wtime(wt) {
//     // let time = document.getElementById("setmessagetime");
//     if (wt.value !== "") {

//         toString(wt);
//         let hours = wt.slice(0, 2);
//         let min = wt.slice(3, 5);
//         let paradigm = "AM";
//         let h1 = hours.slice(0, 1);
//         let h2 = hours.slice(1, 2);
//         if (h1 == 0) {
//             h1 = "";
//         }
//         let h = h1 + h2;
//         if (h > 12) {
//             h = h - 12;
//             paradigm = "PM";
//         }
//         wt = h + ":" + min + " " + paradigm;
//     }
// }
