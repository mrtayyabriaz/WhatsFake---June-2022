let greenmessagediv6 = document.getElementById("greenmessagediv6");
let whitemessagediv6 = document.getElementById("whitemessagediv6");
greenmessagediv6.style.display = "none";
whitemessagediv6.style.display = "none";

function setpos6() {
  textlength = 40;
  sectextlength = 40;
  greenmessagediv6.style.top = pos;
  whitemessagediv6.style.top = pos;
  // greenmessagediv6.style.display = "block";
  whitemessagediv6.style.display = "block";
  console.log(pos);
  defaultdateposition = 6;
}
//add date box 6
let date6 = document.getElementById("date6");
date6.style.display = "none";

function adddate6() {
  date6.style.display = "block";
  date6 = document.getElementById("date6");
  let setdate6 = document.getElementById("setdate6");
  date6.innerHTML = setdate6.value;
  if (defaultdateposition == 6) {
    date6.style.top = pos;
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
    greenmessagediv6.style.top = pos;
    whitemessagediv6.style.top = pos;
    defaultdateposition = 7;
  }
}
function findpos6() {
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
let wtext6 = document.getElementById("whitetext6");
let setgmessage6 = document.getElementById("setgmessage6");
let gtext6 = document.getElementById("greentext6");
let setwmessage6 = document.getElementById("setwmessage6");
let checkbox6 = document.getElementById("gwchkbox6");
let greentime6 = document.getElementById("greentime6");
let whitetime6 = document.getElementById("whitetime6");
let datediv6 = document.getElementById("datediv6");
let radiodiv6 = document.getElementById("radiodiv6");

let add_green_message_button6 = document.getElementById(
  "add_green_message_button6"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext6.style.display = "none";
wtext6.style.display = "block";
setwmessage6.style.display = "none";
radiodiv6.style.display = "none";
greentime6.style.display = "none";
greenmessagediv6.style.display = "none";
// add_green_message_button6.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv6 = document.getElementById("greenmessagediv6");
greenmessagediv6.style.top = "80px";
whitemessagediv6.style.top = "80px";

// check  main function
function check_box_function6() {
  if (checkbox6.checked == true) {
    wtext6.style.display = "none"; // white none
    setwmessage6.style.display = "none";
    whitetime6.style.display = "none";
    whitemessagediv6.style.display = "none";
    gtext6.style.display = "block"; //green block
    greenmessagediv6.style.display = "block";
    greentime6.style.display = "block";
    add_green_message_button6.style.display = "block";
    setgmessage6.style.display = "block";
    radiodiv6.style.display = "flex";
    add_green_message_button6.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext6.style.display = "block"; // white block
    // setwmessage6.style.display = "block";
    // whitetime6.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv6.style.display = "block";
    gtext6.style.display = "none"; //green none
    // greentime6.style.display = "none";
    // setgmessage6.style.display = "none";
    // add_green_message_button6.style.display = "none";
    greenmessagediv6.style.display = "none";
    radiodiv6.style.display = "none";
    add_green_message_button6.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick6").style.display = "none";
document.getElementById("bluetick6").style.display = "none";
selected6 = "single6";
function findselected6() {
  selected6 = document.querySelector("input[name='tick6']:checked").value;
  // console.log(selected6);
  document.getElementById("singletick6").checked = true;

  if (selected6 == "single6") {
    document.getElementById("singletick6").style.display = "block";
    document.getElementById("doubletick6").style.display = "none";
    document.getElementById("bluetick6").style.display = "none";
  }
  if (selected6 == "double6") {
    document.getElementById("singletick6").style.display = "none";
    document.getElementById("doubletick6").style.display = "block";
    document.getElementById("bluetick6").style.display = "none";
  }
  if (selected6 == "blue6") {
    document.getElementById("singletick6").style.display = "none";
    document.getElementById("doubletick6").style.display = "none";
    document.getElementById("bluetick6").style.display = "block";
  }
}
radio6 = document.querySelectorAll('input[name="tick6"]');
radio6.forEach((radio6) => {
  radio6.addEventListener("change", findselected6);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage6");
var calculateContentHeight = function (ta1, scanAmount6) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount6 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount6) + "px";
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
var calculateHeight6 = function () {
  var ta1 = document.getElementById("setgmessage6"),
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

function add_green_message6() {
  // green message

  gmessage6 = document.getElementById("gmessage6");
  gmessage6.innerText = setgmessage6.value;
  wmessage6 = document.getElementById("wmessage6");
  wmessage6.innerText = setgmessage6.value;
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
    document.getElementById("gbubblediv6").style.paddingRight = "0px";
    document.getElementById("gbubblediv6").style.marginBottom = "12px";
    document.getElementById("gbubblediv6").style.marginRight = "10px";
    document.getElementById("wbubblediv6").style.paddingRight = "0px";
    document.getElementById("wbubblediv6").style.marginBottom = "12px";
    document.getElementById("wbubblediv6").style.marginRight = "10px";
    document.getElementById("gmessagetime6").style.right = "-0px";
    document.getElementById("gmessagetime6").style.top = "-4px";
    document.getElementById("wmessagetime6").style.right = "-11px";
    document.getElementById("wmessagetime6").style.top = "-16px";
    document.getElementById("gnoke6").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv6").style.paddingRight = "70px";
    document.getElementById("gbubblediv6").style.marginBottom = "0px";
    document.getElementById("gbubblediv6").style.marginRight = "0px";
    document.getElementById("wbubblediv6").style.paddingRight = "50px";
    document.getElementById("wbubblediv6").style.marginBottom = "0px";
    document.getElementById("wbubblediv6").style.marginRight = "0px";
    document.getElementById("gmessagetime6").style.right = "-52px";
    document.getElementById("gmessagetime6").style.top = "-7px";
    document.getElementById("wmessagetime6").style.right = "-55px";
    document.getElementById("wmessagetime6").style.top = "-7px";
    document.getElementById("gnoke6").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime6(gt) {
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
    document.getElementById("gmessagetime6").innerHTML = gt;
    document.getElementById("wmessagetime6").innerHTML = gt;
  }
}
