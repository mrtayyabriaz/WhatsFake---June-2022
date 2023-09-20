let greenmessagediv3 = document.getElementById("greenmessagediv3");
let whitemessagediv3 = document.getElementById("whitemessagediv3");
greenmessagediv3.style.display = "none";
whitemessagediv3.style.display = "none";

function setpos3() {
  textlength = 40;
  sectextlength = 40;
  greenmessagediv3.style.top = pos;
  whitemessagediv3.style.top = pos;
  // greenmessagediv3.style.display = "block";
  whitemessagediv3.style.display = "block";
  console.log(pos);
  defaultdateposition = 3;
}

//add date box 3
let date3 = document.getElementById("date3");
date3.style.display = "none";

function adddate3() {
  date3.style.display = "block";
  date3 = document.getElementById("date3");
  let setdate3 = document.getElementById("setdate3");
  date3.innerHTML = setdate3.value;
  if (defaultdateposition == 3) {
    date3.style.top = pos;

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
      // pos = pos + 30;
      pos = pos + "px";
      console.log(pos);
    } else if (pos.length == 6) {
      pos = pos.slice(0, 4);
      pos = parseInt(pos);
      pos = pos + 40;
      pos = pos + "px";
      console.log(pos);
    }
    greenmessagediv3.style.top = pos;
    whitemessagediv3.style.top = pos;
    defaultdateposition = 4;
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
function findpos3() {
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
let wtext3 = document.getElementById("whitetext3");
let setgmessage3 = document.getElementById("setgmessage3");
let gtext3 = document.getElementById("greentext3");
// let setwmessage3 = document.getElementById("setwmessage3");
let checkbox3 = document.getElementById("gwchkbox3");
let greentime3 = document.getElementById("greentime3");
let whitetime3 = document.getElementById("whitetime3");
let datediv3 = document.getElementById("datediv3");
let radiodiv3 = document.getElementById("radiodiv3");

let add_green_message_button3 = document.getElementById(
  "add_green_message_button3"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext3.style.display = "none";
wtext3.style.display = "block";
// setwmessage3.style.display = "none";
radiodiv3.style.display = "none";
greentime3.style.display = "none";
greenmessagediv3.style.display = "none";
// add_green_message_button3.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv3 = document.getElementById("greenmessagediv3");
greenmessagediv3.style.top = "80px";
whitemessagediv3.style.top = "80px";

// check  main function
function check_box_function3() {
  if (checkbox3.checked == true) {
    wtext3.style.display = "none"; // white none
    // setwmessage3.style.display = "none";
    whitetime3.style.display = "none";
    whitemessagediv3.style.display = "none";
    gtext3.style.display = "block"; //green block
    greenmessagediv3.style.display = "block";
    greentime3.style.display = "block";
    add_green_message_button3.style.display = "block";
    setgmessage3.style.display = "block";
    radiodiv3.style.display = "flex";
    add_green_message_button3.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext3.style.display = "block"; // white block
    // setwmessage3.style.display = "block";
    // whitetime3.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv3.style.display = "block";
    gtext3.style.display = "none"; //green none
    // greentime3.style.display = "none";
    // setgmessage3.style.display = "none";
    // add_green_message_button3.style.display = "none";
    greenmessagediv3.style.display = "none";
    radiodiv3.style.display = "none";
    add_green_message_button3.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick3").style.display = "none";
document.getElementById("bluetick3").style.display = "none";
selected3 = "single3";
function findselected3() {
  selected3 = document.querySelector("input[name='tick3']:checked").value;
  // console.log(selected3);
  document.getElementById("singletick3").checked = true;

  if (selected3 == "single3") {
    document.getElementById("singletick3").style.display = "block";
    document.getElementById("doubletick3").style.display = "none";
    document.getElementById("bluetick3").style.display = "none";
  }
  if (selected3 == "double3") {
    document.getElementById("singletick3").style.display = "none";
    document.getElementById("doubletick3").style.display = "block";
    document.getElementById("bluetick3").style.display = "none";
  }
  if (selected3 == "blue3") {
    document.getElementById("singletick3").style.display = "none";
    document.getElementById("doubletick3").style.display = "none";
    document.getElementById("bluetick3").style.display = "block";
  }
}
radio3 = document.querySelectorAll('input[name="tick3"]');
radio3.forEach((radio3) => {
  radio3.addEventListener("change", findselected3);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage3");
var calculateContentHeight = function (ta1, scanAmount3) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount3 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount3) + "px";
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
var calculateHeight3 = function () {
  var ta1 = document.getElementById("setgmessage3"),
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

function add_green_message3() {
  // green message

  gmessage3 = document.getElementById("gmessage3");
  gmessage3.innerText = setgmessage3.value;
  wmessage3 = document.getElementById("wmessage3");
  wmessage3.innerText = setgmessage3.value;
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
    document.getElementById("gbubblediv3").style.paddingRight = "0px";
    document.getElementById("gbubblediv3").style.marginBottom = "12px";
    document.getElementById("gbubblediv3").style.marginRight = "10px";
    document.getElementById("wbubblediv3").style.paddingRight = "0px";
    document.getElementById("wbubblediv3").style.marginBottom = "12px";
    document.getElementById("wbubblediv3").style.marginRight = "10px";
    document.getElementById("gmessagetime3").style.right = "-0px";
    document.getElementById("gmessagetime3").style.top = "-4px";
    document.getElementById("wmessagetime3").style.right = "-11px";
    document.getElementById("wmessagetime3").style.top = "-16px";
    document.getElementById("gnoke3").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv3").style.paddingRight = "70px";
    document.getElementById("gbubblediv3").style.marginBottom = "0px";
    document.getElementById("gbubblediv3").style.marginRight = "0px";
    document.getElementById("wbubblediv3").style.paddingRight = "50px";
    document.getElementById("wbubblediv3").style.marginBottom = "0px";
    document.getElementById("wbubblediv3").style.marginRight = "0px";
    document.getElementById("gmessagetime3").style.right = "-52px";
    document.getElementById("gmessagetime3").style.top = "-7px";
    document.getElementById("wmessagetime3").style.right = "-55px";
    document.getElementById("wmessagetime3").style.top = "-7px";
    document.getElementById("gnoke3").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime3(gt) {
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
    document.getElementById("gmessagetime3").innerHTML = gt;
    document.getElementById("wmessagetime3").innerHTML = gt;
  }
}
