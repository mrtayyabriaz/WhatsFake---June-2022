let greenmessagediv10 = document.getElementById("greenmessagediv10");
let whitemessagediv10 = document.getElementById("whitemessagediv10");
greenmessagediv10.style.display = "none";
whitemessagediv10.style.display = "none";

function setpos10() {
  greenmessagediv10.style.top = pos;
  whitemessagediv10.style.top = pos;
  // greenmessagediv10.style.display = "block";
  whitemessagediv10.style.display = "block";
  console.log(pos);
  textlength = 40;
  sectextlength = 40;
  defaultdateposition = 10;
}
//add date box 10
let date10 = document.getElementById("date10");
date10.style.display = "none";

function adddate10() {
  date10.style.display = "block";
  date10 = document.getElementById("date10");
  let setdate10 = document.getElementById("setdate10");
  date10.innerHTML = setdate10.value;
  if (defaultdateposition == 10) {
    date10.style.top = pos;
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
    greenmessagediv10.style.top = pos;
    whitemessagediv10.style.top = pos;
    defaultdateposition = 11;
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
function findpos10() {
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
let wtext10 = document.getElementById("whitetext10");
let setgmessage10 = document.getElementById("setgmessage10");
let gtext10 = document.getElementById("greentext10");
let setwmessage10 = document.getElementById("setwmessage10");
let checkbox10 = document.getElementById("gwchkbox10");
let greentime10 = document.getElementById("greentime10");
let whitetime10 = document.getElementById("whitetime10");
let datediv10 = document.getElementById("datediv10");
let radiodiv10 = document.getElementById("radiodiv10");

let add_green_message_button10 = document.getElementById(
  "add_green_message_button10"
);
// let add_white_message_button = document.getElementById("add_white_message_button");
// green display none by deafult
gtext10.style.display = "none";
wtext10.style.display = "block";
setwmessage10.style.display = "none";
radiodiv10.style.display = "none";
greentime10.style.display = "none";
greenmessagediv10.style.display = "none";
// add_green_message_button10.style.display = "none";
// add_white_message_button.style.display = "none"
// adding position
// let greenmessagediv10 = document.getElementById("greenmessagediv10");
greenmessagediv10.style.top = "90px";
whitemessagediv10.style.top = "90px";

// check  main function
function check_box_function10() {
  if (checkbox10.checked == true) {
    wtext10.style.display = "none"; // white none
    setwmessage10.style.display = "none";
    whitetime10.style.display = "none";
    whitemessagediv10.style.display = "none";
    gtext10.style.display = "block"; //green block
    greenmessagediv10.style.display = "block";
    greentime10.style.display = "block";
    add_green_message_button10.style.display = "block";
    setgmessage10.style.display = "block";
    radiodiv10.style.display = "flex";
    add_green_message_button10.style.marginTop = "0px";

    // document.getElementById("sradio").checked = true;
  } else {
    wtext10.style.display = "block"; // white block
    // setwmessage10.style.display = "block";
    // whitetime10.style.display = "block";
    // add_white_message_button.style.display = "block";
    whitemessagediv10.style.display = "block";
    gtext10.style.display = "none"; //green none
    // greentime10.style.display = "none";
    // setgmessage10.style.display = "none";
    // add_green_message_button10.style.display = "none";
    greenmessagediv10.style.display = "none";
    radiodiv10.style.display = "none";
    add_green_message_button10.style.marginTop = "24px";
  }
}

// ticks function
document.getElementById("doubletick10").style.display = "none";
document.getElementById("bluetick10").style.display = "none";
selected10 = "single10";
function findselected10() {
  selected10 = document.querySelector("input[name='tick10']:checked").value;
  // console.log(selected10);
  document.getElementById("singletick10").checked = true;

  if (selected10 == "single10") {
    document.getElementById("singletick10").style.display = "block";
    document.getElementById("doubletick10").style.display = "none";
    document.getElementById("bluetick10").style.display = "none";
  }
  if (selected10 == "double10") {
    document.getElementById("singletick10").style.display = "none";
    document.getElementById("doubletick10").style.display = "block";
    document.getElementById("bluetick10").style.display = "none";
  }
  if (selected10 == "blue10") {
    document.getElementById("singletick10").style.display = "none";
    document.getElementById("doubletick10").style.display = "none";
    document.getElementById("bluetick10").style.display = "block";
  }
}
radio10 = document.querySelectorAll('input[name="tick10"]');
radio10.forEach((radio10) => {
  radio10.addEventListener("change", findselected10);
});

// messages data | messages data | messages data | messages data | messages data | messages data |
var ta1 = document.getElementById("setgmessage10");
var calculateContentHeight = function (ta1, scanAmount10) {
  var origHeight = ta1.style.height,
    height = ta1.offsetHeight,
    scrollHeight = ta1.scrollHeight,
    overflow = ta1.style.overflow;
  if (height >= scrollHeight) {
    ta1.style.height = height + scanAmount10 + "px";
    ta1.style.overflow = "hidden";
    if (scrollHeight < ta1.scrollHeight) {
      while (ta1.offsetHeight >= ta1.scrollHeight) {
        ta1.style.height = (height -= scanAmount10) + "px";
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
var calculateHeight10 = function () {
  var ta1 = document.getElementById("setgmessage10"),
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
function add_green_message10() {
  // green message

  gmessage10 = document.getElementById("gmessage10");
  gmessage10.innerText = setgmessage10.value;
  wmessage10 = document.getElementById("wmessage10");
  wmessage10.innerText = setgmessage10.value;
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
      }
    } else if (pos.length == 6) {
      pos = pos.slice(0, 4);
      pos = parseInt(pos);
      pos = pos - 100;
      pos = pos + "px";
      console.log(pos);
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
    // defaultmsgposition = 2;
  }
  if (setgmessage.value.length > 24) {
    document.getElementById("gbubblediv10").style.paddingRight = "0px";
    document.getElementById("gbubblediv10").style.marginBottom = "12px";
    document.getElementById("gbubblediv10").style.marginRight = "10px";
    document.getElementById("wbubblediv10").style.paddingRight = "0px";
    document.getElementById("wbubblediv10").style.marginBottom = "12px";
    document.getElementById("wbubblediv10").style.marginRight = "10px";
    document.getElementById("gmessagetime10").style.right = "-0px";
    document.getElementById("gmessagetime10").style.top = "-4px";
    document.getElementById("wmessagetime10").style.right = "-11px";
    document.getElementById("wmessagetime10").style.top = "-16px";
    document.getElementById("gnoke10").style.right = "-25px";
  }
  if (setgmessage.value.length <= 24) {
    document.getElementById("gbubblediv10").style.paddingRight = "70px";
    document.getElementById("gbubblediv10").style.marginBottom = "0px";
    document.getElementById("gbubblediv10").style.marginRight = "0px";
    document.getElementById("wbubblediv10").style.paddingRight = "50px";
    document.getElementById("wbubblediv10").style.marginBottom = "0px";
    document.getElementById("wbubblediv10").style.marginRight = "0px";
    document.getElementById("gmessagetime10").style.right = "-52px";
    document.getElementById("gmessagetime10").style.top = "-7px";
    document.getElementById("wmessagetime10").style.right = "-55px";
    document.getElementById("wmessagetime10").style.top = "-7px";
    document.getElementById("gnoke10").style.right = "-15px";
  }
}

function add_white_message() {
  // white message
  // add message function end
}

// green time function
gt;
function gtime10(gt) {
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
    document.getElementById("gmessagetime10").innerHTML = gt;
    document.getElementById("wmessagetime10").innerHTML = gt;
  }
}
