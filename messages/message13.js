let greenmessagediv13 = document.getElementById("greenmessagediv13");
let whitemessagediv13 = document.getElementById("whitemessagediv13");
greenmessagediv13.style.display = "none";
whitemessagediv13.style.display = "none";

function setpos13() {
  greenmessagediv13.style.top = pos;
  whitemessagediv13.style.top = pos;
  // greenmessagediv13.style.display = "block";
  whitemessagediv13.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 13;
}
//add date box 13
let date13 = document.getElementById("date13");
date13.style.display = "none";

function adddate13() {
  date13.style.display = "block";
  date13 = document.getElementById("date13");
  let setdate13 = document.getElementById("setdate13");
  date13.innerHTML = setdate13.value;
  if (defaultdateposition == 13) {
    date13.style.top = pos;
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
    greenmessagediv13.style.top = pos;
    whitemessagediv13.style.top = pos;
    defaultdateposition = 14;
  }
}
function findpos13() {
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
let wtext13 = document.getElementById("whitetext13");
let setgmessage13 = document.getElementById("setgmessage13");
let gtext13 = document.getElementById("greentext13");
let setwmessage13 = document.getElementById("setwmessage13");
let checkbox13 = document.getElementById("gwchkbox13");
let greentime13 = document.getElementById("greentime13");
let whitetime13 = document.getElementById("whitetime13");
let datediv13 = document.getElementById("datediv13");
let radiodiv13 = document.getElementById("radiodiv13");

let add_green_message_button13 = document.getElementById(
  "add_green_message_button13"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
/* green display none by deafult*/
gtext13.style.display = "none";
wtext13.style.display = "block";
setwmessage13.style.display = "none";
radiodiv13.style.display = "none";
greentime13.style.display = "none";
greenmessagediv13.style.display = "none";
// add_green_message_button13.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv13 = document.getElementById("greenmessagediv13");
greenmessagediv13.style.top = "90px";
whitemessagediv13.style.top = "90px";

// check  main function
function check_box_function13() {
  if (checkbox13.checked == true) {
    wtext13.style.display = "none"; // white none
    setwmessage13.style.display = "none";
    whitetime13.style.display = "none";
    whitemessagediv13.style.display = "none";
    gtext13.style.display = "block"; //green block
    greenmessagediv13.style.display = "block";
    greentime13.style.display = "block";
    add_green_message_button13.style.display = "block";
    setgmessage13.style.display = "block";
    radiodiv13.style.display = "flex";
    add_green_message_button13.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext13.style.display = "block"; // white block
    // setwmessage13.style.display = "block";
    // whitetime13.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv13.style.display = "block";
    gtext13.style.display = "none"; //green none
    // greentime13.style.display = "none";
    // setgmessage13.style.display = "none";
    // add_green_message_button13.style.display = "none";
    greenmessagediv13.style.display = "none";
    radiodiv13.style.display = "none";
    add_green_message_button13.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick13").style.display = "none";
document.getElementById("bluetick13").style.display = "none";
selected13 = "single13";
function findselected13() {
  selected13 = document.querySelector("input[name='tick13']:checked").value;
  // console.log(selected13);
  document.getElementById("singletick13").checked = true;

  if (selected13 == "single13") {
    document.getElementById("singletick13").style.display = "block";
    document.getElementById("doubletick13").style.display = "none";
    document.getElementById("bluetick13").style.display = "none";
  }
  if (selected13 == "double13") {
    document.getElementById("singletick13").style.display = "none";
    document.getElementById("doubletick13").style.display = "block";
    document.getElementById("bluetick13").style.display = "none";
  }
  if (selected13 == "blue13") {
    document.getElementById("singletick13").style.display = "none";
    document.getElementById("doubletick13").style.display = "none";
    document.getElementById("bluetick13").style.display = "block";
  }
}
radio13 = document.querySelectorAll('input[name="tick13"]');
radio13.forEach((radio13) => {
  radio13.addEventListener("change", findselected13);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage13");
var calculateContentHeight = function (ta1, scanAmount13) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount13 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount13) + "px";
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
var calculateHeight13 = function () {
  var ta1 = document.getElementById("setgmessage13"),
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
function add_green_message13() {
  // green message

  gmessage13 = document.getElementById("gmessage13");
  gmessage13.innerText = setgmessage13.value;
  wmessage13 = document.getElementById("wmessage13");
  wmessage13.innerText = setgmessage13.value;
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
    document.getElementById("gbubblediv13").style.paddingRight = "0px";
    document.getElementById("gbubblediv13").style.marginBottom = "12px";
    document.getElementById("gbubblediv13").style.marginRight = "10px";
    document.getElementById("wbubblediv13").style.paddingRight = "0px";
    document.getElementById("wbubblediv13").style.marginBottom = "12px";
    document.getElementById("wbubblediv13").style.marginRight = "10px";
    document.getElementById("gmessagetime13").style.right = "-0px";
    document.getElementById("gmessagetime13").style.top = "-4px";
    document.getElementById("wmessagetime13").style.right = "-11px";
    document.getElementById("wmessagetime13").style.top = "-16px";
    document.getElementById("gnoke13").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv13").style.paddingRight = "70px";
    document.getElementById("gbubblediv13").style.marginBottom = "0px";
    document.getElementById("gbubblediv13").style.marginRight = "0px";
    document.getElementById("wbubblediv13").style.paddingRight = "50px";
    document.getElementById("wbubblediv13").style.marginBottom = "0px";
    document.getElementById("wbubblediv13").style.marginRight = "0px";
    document.getElementById("gmessagetime13").style.right = "-52px";
    document.getElementById("gmessagetime13").style.top = "-7px";
    document.getElementById("wmessagetime13").style.right = "-55px";
    document.getElementById("wmessagetime13").style.top = "-7px";
    document.getElementById("gnoke13").style.right = "-15px";
  }
}
function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime13(gt) {
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
    document.getElementById("gmessagetime13").innerHTML = gt;
    document.getElementById("wmessagetime13").innerHTML = gt;
  }
}
