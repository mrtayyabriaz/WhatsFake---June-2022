let greenmessagediv7 = document.getElementById("greenmessagediv7");
let whitemessagediv7 = document.getElementById("whitemessagediv7");
greenmessagediv7.style.display = "none";
whitemessagediv7.style.display = "none";

function setpos7() {
  greenmessagediv7.style.top = pos;
  whitemessagediv7.style.top = pos;
  // greenmessagediv7.style.display = "block";
  whitemessagediv7.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 7;
}
//add date box 7
let date7 = document.getElementById("date7");
date7.style.display = "none";

function adddate7() {
  date7.style.display = "block";
  date7 = document.getElementById("date7");
  let setdate7 = document.getElementById("setdate7");
  date7.innerHTML = setdate7.value;
  if (defaultdateposition == 7) {
    date7.style.top = pos;
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
    greenmessagediv7.style.top = pos;
    whitemessagediv7.style.top = pos;
    defaultdateposition = 8;
  }
}
function findpos7() {
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
let wtext7 = document.getElementById("whitetext7");
let setgmessage7 = document.getElementById("setgmessage7");
let gtext7 = document.getElementById("greentext7");
let setwmessage7 = document.getElementById("setwmessage7");
let checkbox7 = document.getElementById("gwchkbox7");
let greentime7 = document.getElementById("greentime7");
let whitetime7 = document.getElementById("whitetime7");
let datediv7 = document.getElementById("datediv7");
let radiodiv7 = document.getElementById("radiodiv7");

let add_green_message_button7 = document.getElementById(
  "add_green_message_button7"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext7.style.display = "none";
wtext7.style.display = "block";
setwmessage7.style.display = "none";
radiodiv7.style.display = "none";
greentime7.style.display = "none";
greenmessagediv7.style.display = "none";
// add_green_message_button7.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv7 = document.getElementById("greenmessagediv7");
greenmessagediv7.style.top = "80px";
whitemessagediv7.style.top = "80px";

// check  main function
function check_box_function7() {
  if (checkbox7.checked == true) {
    wtext7.style.display = "none"; // white none
    setwmessage7.style.display = "none";
    whitetime7.style.display = "none";
    whitemessagediv7.style.display = "none";
    gtext7.style.display = "block"; //green block
    greenmessagediv7.style.display = "block";
    greentime7.style.display = "block";
    add_green_message_button7.style.display = "block";
    setgmessage7.style.display = "block";
    radiodiv7.style.display = "flex";
    add_green_message_button7.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext7.style.display = "block"; // white block
    // setwmessage7.style.display = "block";
    // whitetime7.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv7.style.display = "block";
    gtext7.style.display = "none"; //green none
    // greentime7.style.display = "none";
    // setgmessage7.style.display = "none";
    // add_green_message_button7.style.display = "none";
    greenmessagediv7.style.display = "none";
    radiodiv7.style.display = "none";
    add_green_message_button7.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick7").style.display = "none";
document.getElementById("bluetick7").style.display = "none";
selected7 = "single7";
function findselected7() {
  selected7 = document.querySelector("input[name='tick7']:checked").value;
  // console.log(selected7);
  document.getElementById("singletick7").checked = true;

  if (selected7 == "single7") {
    document.getElementById("singletick7").style.display = "block";
    document.getElementById("doubletick7").style.display = "none";
    document.getElementById("bluetick7").style.display = "none";
  }
  if (selected7 == "double7") {
    document.getElementById("singletick7").style.display = "none";
    document.getElementById("doubletick7").style.display = "block";
    document.getElementById("bluetick7").style.display = "none";
  }
  if (selected7 == "blue7") {
    document.getElementById("singletick7").style.display = "none";
    document.getElementById("doubletick7").style.display = "none";
    document.getElementById("bluetick7").style.display = "block";
  }
}
radio7 = document.querySelectorAll('input[name="tick7"]');
radio7.forEach((radio7) => {
  radio7.addEventListener("change", findselected7);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage7");
var calculateContentHeight = function (ta1, scanAmount7) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount7 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount7) + "px";
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
var calculateHeight7 = function () {
  var ta1 = document.getElementById("setgmessage7"),
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
function add_green_message7() {
  // green message

  gmessage7 = document.getElementById("gmessage7");
  gmessage7.innerText = setgmessage7.value;
  wmessage7 = document.getElementById("wmessage7");
  wmessage7.innerText = setgmessage7.value;
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
    document.getElementById("gbubblediv7").style.paddingRight = "0px";
    document.getElementById("gbubblediv7").style.marginBottom = "12px";
    document.getElementById("gbubblediv7").style.marginRight = "10px";
    document.getElementById("wbubblediv7").style.paddingRight = "0px";
    document.getElementById("wbubblediv7").style.marginBottom = "12px";
    document.getElementById("wbubblediv7").style.marginRight = "10px";
    document.getElementById("gmessagetime7").style.right = "-0px";
    document.getElementById("gmessagetime7").style.top = "-4px";
    document.getElementById("wmessagetime7").style.right = "-11px";
    document.getElementById("wmessagetime7").style.top = "-16px";
    document.getElementById("gnoke7").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv7").style.paddingRight = "70px";
    document.getElementById("gbubblediv7").style.marginBottom = "0px";
    document.getElementById("gbubblediv7").style.marginRight = "0px";
    document.getElementById("wbubblediv7").style.paddingRight = "50px";
    document.getElementById("wbubblediv7").style.marginBottom = "0px";
    document.getElementById("wbubblediv7").style.marginRight = "0px";
    document.getElementById("gmessagetime7").style.right = "-52px";
    document.getElementById("gmessagetime7").style.top = "-7px";
    document.getElementById("wmessagetime7").style.right = "-55px";
    document.getElementById("wmessagetime7").style.top = "-7px";
    document.getElementById("gnoke7").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime7(gt) {
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
    document.getElementById("gmessagetime7").innerHTML = gt;
    document.getElementById("wmessagetime7").innerHTML = gt;
  }
}
