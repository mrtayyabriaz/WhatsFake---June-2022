let greenmessagediv9 = document.getElementById("greenmessagediv9");
let whitemessagediv9 = document.getElementById("whitemessagediv9");
greenmessagediv9.style.display = "none";
whitemessagediv9.style.display = "none";

function setpos9() {
  greenmessagediv9.style.top = pos;
  whitemessagediv9.style.top = pos;
  // greenmessagediv9.style.display = "block";
  whitemessagediv9.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 9;
}
//add date box 9
let date9 = document.getElementById("date9");
date9.style.display = "none";

function adddate9() {
  date9.style.display = "block";
  date9 = document.getElementById("date9");
  let setdate9 = document.getElementById("setdate9");
  date9.innerHTML = setdate9.value;
  if (defaultdateposition == 9) {
    date9.style.top = pos;
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
    greenmessagediv9.style.top = pos;
    whitemessagediv9.style.top = pos;
    defaultdateposition = 10;
  }
}
function findpos9() {
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
let wtext9 = document.getElementById("whitetext9");
let setgmessage9 = document.getElementById("setgmessage9");
let gtext9 = document.getElementById("greentext9");
let setwmessage9 = document.getElementById("setwmessage9");
let checkbox9 = document.getElementById("gwchkbox9");
let greentime9 = document.getElementById("greentime9");
let whitetime9 = document.getElementById("whitetime9");
let datediv9 = document.getElementById("datediv9");
let radiodiv9 = document.getElementById("radiodiv9");

let add_green_message_button9 = document.getElementById(
  "add_green_message_button9"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext9.style.display = "none";
wtext9.style.display = "block";
setwmessage9.style.display = "none";
radiodiv9.style.display = "none";
greentime9.style.display = "none";
greenmessagediv9.style.display = "none";
// add_green_message_button9.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv9 = document.getElementById("greenmessagediv9");
greenmessagediv9.style.top = "90px";
whitemessagediv9.style.top = "90px";

// check  main function
function check_box_function9() {
  if (checkbox9.checked == true) {
    wtext9.style.display = "none"; // white none
    setwmessage9.style.display = "none";
    whitetime9.style.display = "none";
    whitemessagediv9.style.display = "none";
    gtext9.style.display = "block"; //green block
    greenmessagediv9.style.display = "block";
    greentime9.style.display = "block";
    add_green_message_button9.style.display = "block";
    setgmessage9.style.display = "block";
    radiodiv9.style.display = "flex";
    add_green_message_button9.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext9.style.display = "block"; // white block
    // setwmessage9.style.display = "block";
    // whitetime9.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv9.style.display = "block";
    gtext9.style.display = "none"; //green none
    // greentime9.style.display = "none";
    // setgmessage9.style.display = "none";
    // add_green_message_button9.style.display = "none";
    greenmessagediv9.style.display = "none";
    radiodiv9.style.display = "none";
    add_green_message_button9.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick9").style.display = "none";
document.getElementById("bluetick9").style.display = "none";
selected9 = "single9";
function findselected9() {
  selected9 = document.querySelector("input[name='tick9']:checked").value;
  // console.log(selected9);
  document.getElementById("singletick9").checked = true;

  if (selected9 == "single9") {
    document.getElementById("singletick9").style.display = "block";
    document.getElementById("doubletick9").style.display = "none";
    document.getElementById("bluetick9").style.display = "none";
  }
  if (selected9 == "double9") {
    document.getElementById("singletick9").style.display = "none";
    document.getElementById("doubletick9").style.display = "block";
    document.getElementById("bluetick9").style.display = "none";
  }
  if (selected9 == "blue9") {
    document.getElementById("singletick9").style.display = "none";
    document.getElementById("doubletick9").style.display = "none";
    document.getElementById("bluetick9").style.display = "block";
  }
}
radio9 = document.querySelectorAll('input[name="tick9"]');
radio9.forEach((radio9) => {
  radio9.addEventListener("change", findselected9);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage9");
var calculateContentHeight = function (ta1, scanAmount9) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount9 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount9) + "px";
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
var calculateHeight9 = function () {
  var ta1 = document.getElementById("setgmessage9"),
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
function add_green_message9() {
  // green message

  gmessage9 = document.getElementById("gmessage9");
  gmessage9.innerText = setgmessage9.value;
  wmessage9 = document.getElementById("wmessage9");
  wmessage9.innerText = setgmessage9.value;
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
    document.getElementById("gbubblediv9").style.paddingRight = "0px";
    document.getElementById("gbubblediv9").style.marginBottom = "12px";
    document.getElementById("gbubblediv9").style.marginRight = "10px";
    document.getElementById("wbubblediv9").style.paddingRight = "0px";
    document.getElementById("wbubblediv9").style.marginBottom = "12px";
    document.getElementById("wbubblediv9").style.marginRight = "10px";
    document.getElementById("gmessagetime9").style.right = "-0px";
    document.getElementById("gmessagetime9").style.top = "-4px";
    document.getElementById("wmessagetime9").style.right = "-11px";
    document.getElementById("wmessagetime9").style.top = "-16px";
    document.getElementById("gnoke9").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv9").style.paddingRight = "70px";
    document.getElementById("gbubblediv9").style.marginBottom = "0px";
    document.getElementById("gbubblediv9").style.marginRight = "0px";
    document.getElementById("wbubblediv9").style.paddingRight = "50px";
    document.getElementById("wbubblediv9").style.marginBottom = "0px";
    document.getElementById("wbubblediv9").style.marginRight = "0px";
    document.getElementById("gmessagetime9").style.right = "-52px";
    document.getElementById("gmessagetime9").style.top = "-7px";
    document.getElementById("wmessagetime9").style.right = "-55px";
    document.getElementById("wmessagetime9").style.top = "-7px";
    document.getElementById("gnoke9").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime9(gt) {
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
    document.getElementById("gmessagetime9").innerHTML = gt;
    document.getElementById("wmessagetime9").innerHTML = gt;
  }
}
