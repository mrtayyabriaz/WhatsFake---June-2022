let greenmessagediv8 = document.getElementById("greenmessagediv8");
let whitemessagediv8 = document.getElementById("whitemessagediv8");
greenmessagediv8.style.display = "none";
whitemessagediv8.style.display = "none";

function setpos8() {
  greenmessagediv8.style.top = pos;
  whitemessagediv8.style.top = pos;
  // greenmessagediv8.style.display = "block";
  whitemessagediv8.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 8;
}
//add date box 8
let date8 = document.getElementById("date8");
date8.style.display = "none";

function adddate8() {
  date8.style.display = "block";
  date8 = document.getElementById("date8");
  let setdate8 = document.getElementById("setdate8");
  date8.innerHTML = setdate8.value;
  if (defaultdateposition == 8) {
    date8.style.top = pos;
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
    greenmessagediv8.style.top = pos;
    whitemessagediv8.style.top = pos;
    defaultdateposition = 9;
  }
}
function findpos8() {
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
let wtext8 = document.getElementById("whitetext8");
let setgmessage8 = document.getElementById("setgmessage8");
let gtext8 = document.getElementById("greentext8");
let setwmessage8 = document.getElementById("setwmessage8");
let checkbox8 = document.getElementById("gwchkbox8");
let greentime8 = document.getElementById("greentime8");
let whitetime8 = document.getElementById("whitetime8");
let datediv8 = document.getElementById("datediv8");
let radiodiv8 = document.getElementById("radiodiv8");

let add_green_message_button8 = document.getElementById(
  "add_green_message_button8"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext8.style.display = "none";
wtext8.style.display = "block";
setwmessage8.style.display = "none";
radiodiv8.style.display = "none";
greentime8.style.display = "none";
greenmessagediv8.style.display = "none";
// add_green_message_button8.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv8 = document.getElementById("greenmessagediv8");
greenmessagediv8.style.top = "80px";
whitemessagediv8.style.top = "80px";

// check  main function
function check_box_function8() {
  if (checkbox8.checked == true) {
    wtext8.style.display = "none"; // white none
    setwmessage8.style.display = "none";
    whitetime8.style.display = "none";
    whitemessagediv8.style.display = "none";
    gtext8.style.display = "block"; //green block
    greenmessagediv8.style.display = "block";
    greentime8.style.display = "block";
    add_green_message_button8.style.display = "block";
    setgmessage8.style.display = "block";
    radiodiv8.style.display = "flex";
    add_green_message_button8.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext8.style.display = "block"; // white block
    // setwmessage8.style.display = "block";
    // whitetime8.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv8.style.display = "block";
    gtext8.style.display = "none"; //green none
    // greentime8.style.display = "none";
    // setgmessage8.style.display = "none";
    // add_green_message_button8.style.display = "none";
    greenmessagediv8.style.display = "none";
    radiodiv8.style.display = "none";
    add_green_message_button8.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick8").style.display = "none";
document.getElementById("bluetick8").style.display = "none";
selected8 = "single8";
function findselected8() {
  selected8 = document.querySelector("input[name='tick8']:checked").value;
  // console.log(selected8);
  document.getElementById("singletick8").checked = true;

  if (selected8 == "single8") {
    document.getElementById("singletick8").style.display = "block";
    document.getElementById("doubletick8").style.display = "none";
    document.getElementById("bluetick8").style.display = "none";
  }
  if (selected8 == "double8") {
    document.getElementById("singletick8").style.display = "none";
    document.getElementById("doubletick8").style.display = "block";
    document.getElementById("bluetick8").style.display = "none";
  }
  if (selected8 == "blue8") {
    document.getElementById("singletick8").style.display = "none";
    document.getElementById("doubletick8").style.display = "none";
    document.getElementById("bluetick8").style.display = "block";
  }
}
radio8 = document.querySelectorAll('input[name="tick8"]');
radio8.forEach((radio8) => {
  radio8.addEventListener("change", findselected8);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage8");
var calculateContentHeight = function (ta1, scanAmount8) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount8 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount8) + "px";
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
var calculateHeight8 = function () {
  var ta1 = document.getElementById("setgmessage8"),
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
function add_green_message8() {
  // green message

  gmessage8 = document.getElementById("gmessage8");
  gmessage8.innerText = setgmessage8.value;
  wmessage8 = document.getElementById("wmessage8");
  wmessage8.innerText = setgmessage8.value;
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
    document.getElementById("gbubblediv8").style.paddingRight = "0px";
    document.getElementById("gbubblediv8").style.marginBottom = "12px";
    document.getElementById("gbubblediv8").style.marginRight = "10px";
    document.getElementById("wbubblediv8").style.paddingRight = "0px";
    document.getElementById("wbubblediv8").style.marginBottom = "12px";
    document.getElementById("wbubblediv8").style.marginRight = "10px";
    document.getElementById("gmessagetime8").style.right = "-0px";
    document.getElementById("gmessagetime8").style.top = "-4px";
    document.getElementById("wmessagetime8").style.right = "-11px";
    document.getElementById("wmessagetime8").style.top = "-16px";
    document.getElementById("gnoke8").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv8").style.paddingRight = "70px";
    document.getElementById("gbubblediv8").style.marginBottom = "0px";
    document.getElementById("gbubblediv8").style.marginRight = "0px";
    document.getElementById("wbubblediv8").style.paddingRight = "50px";
    document.getElementById("wbubblediv8").style.marginBottom = "0px";
    document.getElementById("wbubblediv8").style.marginRight = "0px";
    document.getElementById("gmessagetime8").style.right = "-52px";
    document.getElementById("gmessagetime8").style.top = "-7px";
    document.getElementById("wmessagetime8").style.right = "-55px";
    document.getElementById("wmessagetime8").style.top = "-7px";
    document.getElementById("gnoke8").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime8(gt) {
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
    document.getElementById("gmessagetime8").innerHTML = gt;
    document.getElementById("wmessagetime8").innerHTML = gt;
  }
}
