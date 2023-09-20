let greenmessagediv4 = document.getElementById("greenmessagediv4");
let whitemessagediv4 = document.getElementById("whitemessagediv4");
greenmessagediv4.style.display = "none";
whitemessagediv4.style.display = "none";

function setpos4() {
  textlength = 40;
  sectextlength = 40;
  greenmessagediv4.style.top = pos;
  whitemessagediv4.style.top = pos;
  // greenmessagediv4.style.display = "block";
  whitemessagediv4.style.display = "block";
  console.log(pos);
  defaultdateposition = 4;
}
//add date box 4
let date4 = document.getElementById("date4");
date4.style.display = "none";

function adddate4() {
  date4.style.display = "block";
  date4 = document.getElementById("date4");
  let setdate4 = document.getElementById("setdate4");
  date4.innerHTML = setdate4.value;
  if (defaultdateposition == 4) {
    date4.style.top = pos;
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
    greenmessagediv4.style.top = pos;
    whitemessagediv4.style.top = pos;
    defaultdateposition = 5;
  }
}
function findpos4() {
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
let wtext4 = document.getElementById("whitetext4");
let setgmessage4 = document.getElementById("setgmessage4");
let gtext4 = document.getElementById("greentext4");
let setwmessage4 = document.getElementById("setwmessage4");
let checkbox4 = document.getElementById("gwchkbox4");
let greentime4 = document.getElementById("greentime4");
let whitetime4 = document.getElementById("whitetime4");
let datediv4 = document.getElementById("datediv4");
let radiodiv4 = document.getElementById("radiodiv4");

let add_green_message_button4 = document.getElementById(
  "add_green_message_button4"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext4.style.display = "none";
wtext4.style.display = "block";
setwmessage4.style.display = "none";
radiodiv4.style.display = "none";
greentime4.style.display = "none";
greenmessagediv4.style.display = "none";
// add_green_message_button4.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv4 = document.getElementById("greenmessagediv4");
greenmessagediv4.style.top = "80px";
whitemessagediv4.style.top = "80px";

// check  main function
function check_box_function4() {
  if (checkbox4.checked == true) {
    wtext4.style.display = "none"; // white none
    setwmessage4.style.display = "none";
    whitetime4.style.display = "none";
    whitemessagediv4.style.display = "none";
    gtext4.style.display = "block"; //green block
    greenmessagediv4.style.display = "block";
    greentime4.style.display = "block";
    add_green_message_button4.style.display = "block";
    setgmessage4.style.display = "block";
    radiodiv4.style.display = "flex";
    add_green_message_button4.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext4.style.display = "block"; // white block
    // setwmessage4.style.display = "block";
    // whitetime4.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv4.style.display = "block";
    gtext4.style.display = "none"; //green none
    // greentime4.style.display = "none";
    // setgmessage4.style.display = "none";
    // add_green_message_button4.style.display = "none";
    greenmessagediv4.style.display = "none";
    radiodiv4.style.display = "none";
    add_green_message_button4.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick4").style.display = "none";
document.getElementById("bluetick4").style.display = "none";
selected4 = "single4";
function findselected4() {
  selected4 = document.querySelector("input[name='tick4']:checked").value;
  // console.log(selected4);
  document.getElementById("singletick4").checked = true;

  if (selected4 == "single4") {
    document.getElementById("singletick4").style.display = "block";
    document.getElementById("doubletick4").style.display = "none";
    document.getElementById("bluetick4").style.display = "none";
  }
  if (selected4 == "double4") {
    document.getElementById("singletick4").style.display = "none";
    document.getElementById("doubletick4").style.display = "block";
    document.getElementById("bluetick4").style.display = "none";
  }
  if (selected4 == "blue4") {
    document.getElementById("singletick4").style.display = "none";
    document.getElementById("doubletick4").style.display = "none";
    document.getElementById("bluetick4").style.display = "block";
  }
}
radio4 = document.querySelectorAll('input[name="tick4"]');
radio4.forEach((radio4) => {
  radio4.addEventListener("change", findselected4);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage4");
var calculateContentHeight = function (ta1, scanAmount4) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount4 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount4) + "px";
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
var calculateHeight4 = function () {
  var ta1 = document.getElementById("setgmessage4"),
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

function add_green_message4() {
  // green message

  gmessage4 = document.getElementById("gmessage4");
  gmessage4.innerText = setgmessage4.value;
  wmessage4 = document.getElementById("wmessage4");
  wmessage4.innerText = setgmessage4.value;
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
    document.getElementById("gbubblediv4").style.paddingRight = "0px";
    document.getElementById("gbubblediv4").style.marginBottom = "12px";
    document.getElementById("gbubblediv4").style.marginRight = "10px";
    document.getElementById("wbubblediv4").style.paddingRight = "0px";
    document.getElementById("wbubblediv4").style.marginBottom = "12px";
    document.getElementById("wbubblediv4").style.marginRight = "10px";
    document.getElementById("gmessagetime4").style.right = "-0px";
    document.getElementById("gmessagetime4").style.top = "-4px";
    document.getElementById("wmessagetime4").style.right = "-11px";
    document.getElementById("wmessagetime4").style.top = "-16px";
    document.getElementById("gnoke4").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv4").style.paddingRight = "70px";
    document.getElementById("gbubblediv4").style.marginBottom = "0px";
    document.getElementById("gbubblediv4").style.marginRight = "0px";
    document.getElementById("wbubblediv4").style.paddingRight = "50px";
    document.getElementById("wbubblediv4").style.marginBottom = "0px";
    document.getElementById("wbubblediv4").style.marginRight = "0px";
    document.getElementById("gmessagetime4").style.right = "-52px";
    document.getElementById("gmessagetime4").style.top = "-7px";
    document.getElementById("wmessagetime4").style.right = "-55px";
    document.getElementById("wmessagetime4").style.top = "-7px";
    document.getElementById("gnoke4").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime4(gt) {
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
    document.getElementById("gmessagetime4").innerHTML = gt;
    document.getElementById("wmessagetime4").innerHTML = gt;
  }
}
