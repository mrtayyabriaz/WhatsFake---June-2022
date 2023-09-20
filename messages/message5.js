let greenmessagediv5 = document.getElementById("greenmessagediv5");
let whitemessagediv5 = document.getElementById("whitemessagediv5");
greenmessagediv5.style.display = "none";
whitemessagediv5.style.display = "none";

function setpos5() {
  textlength = 40;
  sectextlength = 40;
  greenmessagediv5.style.top = pos;
  whitemessagediv5.style.top = pos;
  // greenmessagediv5.style.display = "block";
  whitemessagediv5.style.display = "block";
  console.log(pos);
  defaultdateposition = 5; // default positon
}
//add date box 5
let date5 = document.getElementById("date5");
date5.style.display = "none";
function adddate5() {
  date5.style.display = "block";
  date5 = document.getElementById("date5");
  let setdate5 = document.getElementById("setdate5");
  date5.innerHTML = setdate5.value;
  if (defaultdateposition == 5) {
    date5.style.top = pos;
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
    greenmessagediv5.style.top = pos;
    whitemessagediv5.style.top = pos;
    defaultdateposition = 6;
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
function findpos5() {
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
let wtext5 = document.getElementById("whitetext5");
let setgmessage5 = document.getElementById("setgmessage5");
let gtext5 = document.getElementById("greentext5");
let setwmessage5 = document.getElementById("setwmessage5");
let checkbox5 = document.getElementById("gwchkbox5");
let greentime5 = document.getElementById("greentime5");
let whitetime5 = document.getElementById("whitetime5");
let datediv5 = document.getElementById("datediv5");
let radiodiv5 = document.getElementById("radiodiv5");

let add_green_message_button5 = document.getElementById(
  "add_green_message_button5"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext5.style.display = "none";
wtext5.style.display = "block";
setwmessage5.style.display = "none";
radiodiv5.style.display = "none";
greentime5.style.display = "none";
greenmessagediv5.style.display = "none";
// add_green_message_button5.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv5 = document.getElementById("greenmessagediv5");
greenmessagediv5.style.top = "80px";
whitemessagediv5.style.top = "80px";

// check  main function
function check_box_function5() {
  if (checkbox5.checked == true) {
    wtext5.style.display = "none"; // white none
    setwmessage5.style.display = "none";
    whitetime5.style.display = "none";
    whitemessagediv5.style.display = "none";
    gtext5.style.display = "block"; //green block
    greenmessagediv5.style.display = "block";
    greentime5.style.display = "block";
    add_green_message_button5.style.display = "block";
    setgmessage5.style.display = "block";
    radiodiv5.style.display = "flex";
    add_green_message_button5.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext5.style.display = "block"; // white block
    // setwmessage5.style.display = "block";
    // whitetime5.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv5.style.display = "block";
    gtext5.style.display = "none"; //green none
    // greentime5.style.display = "none";
    // setgmessage5.style.display = "none";
    // add_green_message_button5.style.display = "none";
    greenmessagediv5.style.display = "none";
    radiodiv5.style.display = "none";
    add_green_message_button5.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick5").style.display = "none";
document.getElementById("bluetick5").style.display = "none";
selected5 = "single5";
function findselected5() {
  selected5 = document.querySelector("input[name='tick5']:checked").value;
  // console.log(selected5);
  document.getElementById("singletick5").checked = true;

  if (selected5 == "single5") {
    document.getElementById("singletick5").style.display = "block";
    document.getElementById("doubletick5").style.display = "none";
    document.getElementById("bluetick5").style.display = "none";
  }
  if (selected5 == "double5") {
    document.getElementById("singletick5").style.display = "none";
    document.getElementById("doubletick5").style.display = "block";
    document.getElementById("bluetick5").style.display = "none";
  }
  if (selected5 == "blue5") {
    document.getElementById("singletick5").style.display = "none";
    document.getElementById("doubletick5").style.display = "none";
    document.getElementById("bluetick5").style.display = "block";
  }
}
radio5 = document.querySelectorAll('input[name="tick5"]');
radio5.forEach((radio5) => {
  radio5.addEventListener("change", findselected5);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage5");
var calculateContentHeight = function (ta1, scanAmount5) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount5 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount5) + "px";
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
var calculateHeight5 = function () {
  var ta1 = document.getElementById("setgmessage5"),
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
function add_green_message5() {
  // green message

  gmessage5 = document.getElementById("gmessage5");
  gmessage5.innerText = setgmessage5.value;
  wmessage5 = document.getElementById("wmessage5");
  wmessage5.innerText = setgmessage5.value;
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
    document.getElementById("gbubblediv5").style.paddingRight = "0px";
    document.getElementById("gbubblediv5").style.marginBottom = "12px";
    document.getElementById("gbubblediv5").style.marginRight = "10px";
    document.getElementById("wbubblediv5").style.paddingRight = "0px";
    document.getElementById("wbubblediv5").style.marginBottom = "12px";
    document.getElementById("wbubblediv5").style.marginRight = "10px";
    document.getElementById("gmessagetime5").style.right = "-0px";
    document.getElementById("gmessagetime5").style.top = "-4px";
    document.getElementById("wmessagetime5").style.right = "-11px";
    document.getElementById("wmessagetime5").style.top = "-16px";
    document.getElementById("gnoke5").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv5").style.paddingRight = "70px";
    document.getElementById("gbubblediv5").style.marginBottom = "0px";
    document.getElementById("gbubblediv5").style.marginRight = "0px";
    document.getElementById("wbubblediv5").style.paddingRight = "50px";
    document.getElementById("wbubblediv5").style.marginBottom = "0px";
    document.getElementById("wbubblediv5").style.marginRight = "0px";
    document.getElementById("gmessagetime5").style.right = "-52px";
    document.getElementById("gmessagetime5").style.top = "-7px";
    document.getElementById("wmessagetime5").style.right = "-55px";
    document.getElementById("wmessagetime5").style.top = "-7px";
    document.getElementById("gnoke5").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime5(gt) {
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
    document.getElementById("gmessagetime5").innerHTML = gt;
    document.getElementById("wmessagetime5").innerHTML = gt;
  }
}
