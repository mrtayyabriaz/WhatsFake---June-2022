let greenmessagediv11 = document.getElementById("greenmessagediv11");
let whitemessagediv11 = document.getElementById("whitemessagediv11");
greenmessagediv11.style.display = "none";
whitemessagediv11.style.display = "none";

function setpos11() {
  greenmessagediv11.style.top = pos;
  whitemessagediv11.style.top = pos;
  // greenmessagediv11.style.display = "block";
  whitemessagediv11.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 11;
}
//add date box 11
let date11 = document.getElementById("date11");
date11.style.display = "none";

function adddate11() {
  date11.style.display = "block";
  date11 = document.getElementById("date11");
  let setdate11 = document.getElementById("setdate11");
  date11.innerHTML = setdate11.value;
  if (defaultdateposition == 11) {
    date11.style.top = pos;
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
    greenmessagediv11.style.top = pos;
    whitemessagediv11.style.top = pos;
    defaultdateposition = 12;
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
function findpos11() {
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
let wtext11 = document.getElementById("whitetext11");
let setgmessage11 = document.getElementById("setgmessage11");
let gtext11 = document.getElementById("greentext11");
let setwmessage11 = document.getElementById("setwmessage11");
let checkbox11 = document.getElementById("gwchkbox11");
let greentime11 = document.getElementById("greentime11");
let whitetime11 = document.getElementById("whitetime11");
let datediv11 = document.getElementById("datediv11");
let radiodiv11 = document.getElementById("radiodiv11");

let add_green_message_button11 = document.getElementById(
  "add_green_message_button11"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext11.style.display = "none";
wtext11.style.display = "block";
setwmessage11.style.display = "none";
radiodiv11.style.display = "none";
greentime11.style.display = "none";
greenmessagediv11.style.display = "none";
// add_green_message_button11.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv11 = document.getElementById("greenmessagediv11");
greenmessagediv11.style.top = "90px";
whitemessagediv11.style.top = "90px";

// check  main function
function check_box_function11() {
  if (checkbox11.checked == true) {
    wtext11.style.display = "none"; // white none
    setwmessage11.style.display = "none";
    whitetime11.style.display = "none";
    whitemessagediv11.style.display = "none";
    gtext11.style.display = "block"; //green block
    greenmessagediv11.style.display = "block";
    greentime11.style.display = "block";
    add_green_message_button11.style.display = "block";
    setgmessage11.style.display = "block";
    radiodiv11.style.display = "flex";
    add_green_message_button11.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext11.style.display = "block"; // white block
    // setwmessage11.style.display = "block";
    // whitetime11.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv11.style.display = "block";
    gtext11.style.display = "none"; //green none
    // greentime11.style.display = "none";
    // setgmessage11.style.display = "none";
    // add_green_message_button11.style.display = "none";
    greenmessagediv11.style.display = "none";
    radiodiv11.style.display = "none";
    add_green_message_button11.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick11").style.display = "none";
document.getElementById("bluetick11").style.display = "none";
selected11 = "single11";
function findselected11() {
  selected11 = document.querySelector("input[name='tick11']:checked").value;
  // console.log(selected11);
  document.getElementById("singletick11").checked = true;

  if (selected11 == "single11") {
    document.getElementById("singletick11").style.display = "block";
    document.getElementById("doubletick11").style.display = "none";
    document.getElementById("bluetick11").style.display = "none";
  }
  if (selected11 == "double11") {
    document.getElementById("singletick11").style.display = "none";
    document.getElementById("doubletick11").style.display = "block";
    document.getElementById("bluetick11").style.display = "none";
  }
  if (selected11 == "blue11") {
    document.getElementById("singletick11").style.display = "none";
    document.getElementById("doubletick11").style.display = "none";
    document.getElementById("bluetick11").style.display = "block";
  }
}
radio11 = document.querySelectorAll('input[name="tick11"]');
radio11.forEach((radio11) => {
  radio11.addEventListener("change", findselected11);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage11");
var calculateContentHeight = function (ta1, scanAmount11) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount11 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount11) + "px";
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
var calculateHeight11 = function () {
  var ta1 = document.getElementById("setgmessage11"),
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
function add_green_message11() {
  // green message

  gmessage11 = document.getElementById("gmessage11");
  gmessage11.innerText = setgmessage11.value;
  wmessage11 = document.getElementById("wmessage11");
  wmessage11.innerText = setgmessage11.value;
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
    document.getElementById("gbubblediv11").style.paddingRight = "0px";
    document.getElementById("gbubblediv11").style.marginBottom = "12px";
    document.getElementById("gbubblediv11").style.marginRight = "10px";
    document.getElementById("wbubblediv11").style.paddingRight = "0px";
    document.getElementById("wbubblediv11").style.marginBottom = "12px";
    document.getElementById("wbubblediv11").style.marginRight = "10px";
    document.getElementById("gmessagetime11").style.right = "-0px";
    document.getElementById("gmessagetime11").style.top = "-4px";
    document.getElementById("wmessagetime11").style.right = "-11px";
    document.getElementById("wmessagetime11").style.top = "-16px";
    document.getElementById("gnoke11").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv11").style.paddingRight = "70px";
    document.getElementById("gbubblediv11").style.marginBottom = "0px";
    document.getElementById("gbubblediv11").style.marginRight = "0px";
    document.getElementById("wbubblediv11").style.paddingRight = "50px";
    document.getElementById("wbubblediv11").style.marginBottom = "0px";
    document.getElementById("wbubblediv11").style.marginRight = "0px";
    document.getElementById("gmessagetime11").style.right = "-52px";
    document.getElementById("gmessagetime11").style.top = "-7px";
    document.getElementById("wmessagetime11").style.right = "-55px";
    document.getElementById("wmessagetime11").style.top = "-7px";
    document.getElementById("gnoke11").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime11(gt) {
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
    document.getElementById("gmessagetime11").innerHTML = gt;
    document.getElementById("wmessagetime11").innerHTML = gt;
  }
}
