// globel position system
let pos = "10px";
let textlength = 1;
let defaultmsgposition = 1;
let sectextlength = 1;
// adding position
// let defaultdateposition = 1;
let defaultdateposition = 1;
let defpos = 1;
let greenmessagediv = document.getElementById("greenmessagediv");
let whitemessagediv = document.getElementById("whitemessagediv");
greenmessagediv.style.top = pos;
whitemessagediv.style.top = pos;
console.log(pos);

// add date box
let datediv = document.getElementById("datediv");
datediv.style.display = "none";

function adddate() {
  datediv.style.display = "block";
  let date = document.getElementById("date");
  let setdate = document.getElementById("setdate");
  date.innerHTML = setdate.value;
  if (defpos == 1) {
    // pos = '02px';

    // if (defaultdateposition == 1) {
    date.style.top = pos;
    pos = pos.slice(0, 2);
    pos = parseInt(pos);
    pos = pos + 40;
    pos = pos + "px";
    console.log(pos);
    greenmessagediv.style.top = pos;
    whitemessagediv.style.top = pos;
    defpos = 2;
    defaultdateposition = 2;
    // }
  }
}
function findpos1() {
  // if (pos == '02px') {
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
// add date end

// green white switch buttton function
let wtext = document.getElementById("whitetext");
let setgmessage = document.getElementById("setgmessage");
let gtext = document.getElementById("greentext");
// let setwmessage = document.getElementById("setwmessage");
let checkbox = document.getElementById("gwchkbox");
let greentime = document.getElementById("greentime");
let whitetime = document.getElementById("whitetime");
// let datediv = document.getElementById("datediv");
// let greenmessagediv = document.getElementById("greenmessagediv");

let add_green_message_button = document.getElementById(
  "add_green_message_button"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext.style.display = "none";
wtext.style.display = "block";
// setwmessage.style.display = "none";
radiodiv.style.display = "none"; //hade to be uncommented later
greentime.style.display = "none";
greenmessagediv.style.display = "none";
// add_green_message_button.style.display = "none";
// add_white_message_button.style.display = "none"

// check  main function
function check_box_function() {
  if (checkbox.checked == true) {
    wtext.style.display = "none"; // white none
    // setwmessage.style.display = "none";
    // whitetime.style.display = "none";
    whitemessagediv.style.display = "none";
    gtext.style.display = "block"; //green block
    greenmessagediv.style.display = "block";
    // greentime.style.display = "block";
    add_green_message_button.style.display = "block";
    setgmessage.style.display = "block";
    radiodiv.style.display = "flex";
    add_green_message_button.style.marginTop = "0px";
    // document.getElementById("sradio").checked = true;
  } else {
    add_green_message_button.style.marginTop = "24px";

    wtext.style.display = "block"; // white block
    // setwmessage.style.display = "block";
    whitetime.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv.style.display = "block";
    gtext.style.display = "none"; //green none
    greentime.style.display = "none";
    // setgmessage.style.display = "none";
    // add_green_message_button.style.display = "none";
    greenmessagediv.style.display = "none";
    radiodiv.style.display = "none";
  }
}

// ticks function
let selected = "single";
function findselected() {
  selected = document.querySelector("input[name='tick']:checked").value;
  // console.log(selected);

  if (selected == "single") {
    document.getElementById("singletick").style.display = "block";
    document.getElementById("doubletick").style.display = "none";
    document.getElementById("bluetick").style.display = "none";
  }
  if (selected == "double") {
    document.getElementById("singletick").style.display = "none";
    document.getElementById("doubletick").style.display = "block";
    document.getElementById("bluetick").style.display = "none";
  }
  if (selected == "blue") {
    document.getElementById("singletick").style.display = "none";
    document.getElementById("doubletick").style.display = "none";
    document.getElementById("bluetick").style.display = "block";
  }
}
let radio = document.querySelectorAll('input[name="tick"]');
radio.forEach((radio) => {
  radio.addEventListener("change", findselected);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
// find number of rows in the textarea
var ta1 = document.getElementById("setgmessage");
var calculateContentHeight = function (ta1, scanAmount) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount) + "px";
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
var calculateHeight = function () {
  var ta1 = document.getElementById("setgmessage"),
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

function add_green_message() {
  // green message
  let gmessage = document.getElementById("gmessage");
  gmessage.innerText = setgmessage.value;
  let wmessage = document.getElementById("wmessage");
  wmessage.innerText = setgmessage.value;
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
    document.getElementById("gbubblediv1").style.paddingRight = "0px";
    document.getElementById("gbubblediv1").style.marginBottom = "12px";
    document.getElementById("gbubblediv1").style.marginRight = "10px";
    document.getElementById("wbubblediv1").style.paddingRight = "0px";
    document.getElementById("wbubblediv1").style.marginBottom = "12px";
    document.getElementById("wbubblediv1").style.marginRight = "10px";
    document.getElementById("gmessagetime1").style.right = "-0px";
    document.getElementById("gmessagetime1").style.top = "-4px";
    document.getElementById("wmessagetime").style.right = "-11px";
    document.getElementById("wmessagetime").style.top = "-16px";
    document.getElementById("gnoke1").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv1").style.paddingRight = "70px";
    document.getElementById("gbubblediv1").style.marginBottom = "0px";
    document.getElementById("gbubblediv1").style.marginRight = "0px";
    document.getElementById("wbubblediv1").style.paddingRight = "50px";
    document.getElementById("wbubblediv1").style.marginBottom = "0px";
    document.getElementById("wbubblediv1").style.marginRight = "0px";
    document.getElementById("gmessagetime1").style.right = "-52px";
    document.getElementById("gmessagetime1").style.top = "-7px";
    document.getElementById("wmessagetime").style.right = "-55px";
    document.getElementById("wmessagetime").style.top = "-7px";
    document.getElementById("gnoke1").style.right = "-15px";
  }
}

// function add_white_message() {
//   // white message
//   // add message function end

// }

// green time function
let gt;
function gtime(gt) {
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
    document.getElementById("gmessagetime").innerHTML = gt;
    document.getElementById("wmessagetime").innerHTML = gt;
  }
}
