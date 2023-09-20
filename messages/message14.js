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
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 14;
}
//add date box 14
let date14 = document.getElementById("date14");
date14.style.display = "none";

function adddate14() {
  date14.style.display = "block";
  date14 = document.getElementById("date14");
  let setdate14 = document.getElementById("setdate14");
  date14.innerHTML = setdate14.value;
  if (defaultdateposition == 14) {
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
    } else if (pos.length == 6) {
      pos = pos.slice(0, 4);
      pos = parseInt(pos);
      pos = pos + 40;
      pos = pos + "px";
      console.log(pos);
    }
    greenmessagediv14.style.top = pos;
    whitemessagediv14.style.top = pos;
    defaultdateposition = 15;
  }
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
var ta1 = document.getElementById("setgmessage14");
var calculateContentHeight = function (ta1, scanAmount14) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount14 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount14) + "px";
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
var calculateHeight14 = function () {
  var ta1 = document.getElementById("setgmessage14"),
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
function add_green_message14() {
  // green message

  gmessage14 = document.getElementById("gmessage14");
  gmessage14.innerText = setgmessage14.value;
  wmessage14 = document.getElementById("wmessage14");
  wmessage14.innerText = setgmessage14.value;
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
    document.getElementById("gbubblediv14").style.paddingRight = "0px";
    document.getElementById("gbubblediv14").style.marginBottom = "12px";
    document.getElementById("gbubblediv14").style.marginRight = "10px";
    document.getElementById("wbubblediv14").style.paddingRight = "0px";
    document.getElementById("wbubblediv14").style.marginBottom = "12px";
    document.getElementById("wbubblediv14").style.marginRight = "10px";
    document.getElementById("gmessagetime14").style.right = "-0px";
    document.getElementById("gmessagetime14").style.top = "-4px";
    document.getElementById("wmessagetime14").style.right = "-11px";
    document.getElementById("wmessagetime14").style.top = "-16px";
    document.getElementById("gnoke14").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv14").style.paddingRight = "70px";
    document.getElementById("gbubblediv14").style.marginBottom = "0px";
    document.getElementById("gbubblediv14").style.marginRight = "0px";
    document.getElementById("wbubblediv14").style.paddingRight = "50px";
    document.getElementById("wbubblediv14").style.marginBottom = "0px";
    document.getElementById("wbubblediv14").style.marginRight = "0px";
    document.getElementById("gmessagetime14").style.right = "-52px";
    document.getElementById("gmessagetime14").style.top = "-7px";
    document.getElementById("wmessagetime14").style.right = "-55px";
    document.getElementById("wmessagetime14").style.top = "-7px";
    document.getElementById("gnoke14").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
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
