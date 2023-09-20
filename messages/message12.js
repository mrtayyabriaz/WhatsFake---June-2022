let greenmessagediv12 = document.getElementById("greenmessagediv12");
let whitemessagediv12 = document.getElementById("whitemessagediv12");
greenmessagediv12.style.display = "none";
whitemessagediv12.style.display = "none";

function setpos12() {
  greenmessagediv12.style.top = pos;
  whitemessagediv12.style.top = pos;
  // greenmessagediv12.style.display = "block";
  whitemessagediv12.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 12;
}
//add date box 12
let date12 = document.getElementById("date12");
date12.style.display = "none";

function adddate12() {
  date12.style.display = "block";
  date12 = document.getElementById("date12");
  let setdate12 = document.getElementById("setdate12");
  date12.innerHTML = setdate12.value;
  if (defaultdateposition == 12) {
    date12.style.top = pos;
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
    greenmessagediv12.style.top = pos;
    whitemessagediv12.style.top = pos;
    defaultdateposition = 13;
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
function findpos12() {
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
let wtext12 = document.getElementById("whitetext12");
let setgmessage12 = document.getElementById("setgmessage12");
let gtext12 = document.getElementById("greentext12");
let setwmessage12 = document.getElementById("setwmessage12");
let checkbox12 = document.getElementById("gwchkbox12");
let greentime12 = document.getElementById("greentime12");
let whitetime12 = document.getElementById("whitetime12");
let datediv12 = document.getElementById("datediv12");
let radiodiv12 = document.getElementById("radiodiv12");

let add_green_message_button12 = document.getElementById(
  "add_green_message_button12"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext12.style.display = "none";
wtext12.style.display = "block";
setwmessage12.style.display = "none";
radiodiv12.style.display = "none";
greentime12.style.display = "none";
greenmessagediv12.style.display = "none";
// add_green_message_button12.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv12 = document.getElementById("greenmessagediv12");
greenmessagediv12.style.top = "90px";
whitemessagediv12.style.top = "90px";

// check  main function
function check_box_function12() {
  if (checkbox12.checked == true) {
    wtext12.style.display = "none"; // white none
    setwmessage12.style.display = "none";
    whitetime12.style.display = "none";
    whitemessagediv12.style.display = "none";
    gtext12.style.display = "block"; //green block
    greenmessagediv12.style.display = "block";
    greentime12.style.display = "block";
    add_green_message_button12.style.display = "block";
    setgmessage12.style.display = "block";
    radiodiv12.style.display = "flex";
    add_green_message_button12.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext12.style.display = "block"; // white block
    // setwmessage12.style.display = "block";
    // whitetime12.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv12.style.display = "block";
    gtext12.style.display = "none"; //green none
    // greentime12.style.display = "none";
    // setgmessage12.style.display = "none";
    // add_green_message_button12.style.display = "none";
    greenmessagediv12.style.display = "none";
    radiodiv12.style.display = "none";
    add_green_message_button12.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick12").style.display = "none";
document.getElementById("bluetick12").style.display = "none";
selected12 = "single12";
function findselected12() {
  selected12 = document.querySelector("input[name='tick12']:checked").value;
  // console.log(selected12);
  document.getElementById("singletick12").checked = true;

  if (selected12 == "single12") {
    document.getElementById("singletick12").style.display = "block";
    document.getElementById("doubletick12").style.display = "none";
    document.getElementById("bluetick12").style.display = "none";
  }
  if (selected12 == "double12") {
    document.getElementById("singletick12").style.display = "none";
    document.getElementById("doubletick12").style.display = "block";
    document.getElementById("bluetick12").style.display = "none";
  }
  if (selected12 == "blue12") {
    document.getElementById("singletick12").style.display = "none";
    document.getElementById("doubletick12").style.display = "none";
    document.getElementById("bluetick12").style.display = "block";
  }
}
radio12 = document.querySelectorAll('input[name="tick12"]');
radio12.forEach((radio12) => {
  radio12.addEventListener("change", findselected12);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage12");
var calculateContentHeight = function (ta1, scanAmount12) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount12 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount12) + "px";
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
var calculateHeight12 = function () {
  var ta1 = document.getElementById("setgmessage12"),
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
function add_green_message12() {
  // green message

  gmessage12 = document.getElementById("gmessage12");
  gmessage12.innerText = setgmessage12.value;
  wmessage12 = document.getElementById("wmessage12");
  wmessage12.innerText = setgmessage12.value;
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
    document.getElementById("gbubblediv12").style.paddingRight = "0px";
    document.getElementById("gbubblediv12").style.marginBottom = "12px";
    document.getElementById("gbubblediv12").style.marginRight = "10px";
    document.getElementById("wbubblediv12").style.paddingRight = "0px";
    document.getElementById("wbubblediv12").style.marginBottom = "12px";
    document.getElementById("wbubblediv12").style.marginRight = "10px";
    document.getElementById("gmessagetime12").style.right = "-0px";
    document.getElementById("gmessagetime12").style.top = "-4px";
    document.getElementById("wmessagetime12").style.right = "-11px";
    document.getElementById("wmessagetime12").style.top = "-16px";
    document.getElementById("gnoke12").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv12").style.paddingRight = "70px";
    document.getElementById("gbubblediv12").style.marginBottom = "0px";
    document.getElementById("gbubblediv12").style.marginRight = "0px";
    document.getElementById("wbubblediv12").style.paddingRight = "50px";
    document.getElementById("wbubblediv12").style.marginBottom = "0px";
    document.getElementById("wbubblediv12").style.marginRight = "0px";
    document.getElementById("gmessagetime12").style.right = "-52px";
    document.getElementById("gmessagetime12").style.top = "-7px";
    document.getElementById("wmessagetime12").style.right = "-55px";
    document.getElementById("wmessagetime12").style.top = "-7px";
    document.getElementById("gnoke12").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime12(gt) {
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
    document.getElementById("gmessagetime12").innerHTML = gt;
    document.getElementById("wmessagetime12").innerHTML = gt;
  }
}
