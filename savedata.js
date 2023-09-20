// functions 710
// waplpaper height
function walpaper() {
  let micc = document.getElementById("mic");
  let walpaper = document.getElementById("walpaper");
  let textbox = document.getElementById("textbox");
  if (pos.length == 5) {
    pos = pos.slice(0, 3);
    pos = parseInt(pos);
  }
  if (pos.length == 4) {
    pos = pos.slice(0, 2);
    pos = parseInt(pos);
  }
  if (pos.length == 6) {
    pos = pos.slice(0, 4);
    pos = parseInt(pos);
  }
  if (pos > 500 && pos < 710) {
    walpaper.style.height = "830px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + " wh"); //walpaper height
    micc.style.bottom = "5px";
    textbox.style.bottom = "6px";
  } else if (pos >= 710 && pos < 810) {
    walpaper.style.height = "930px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + "w");
    micc.style.bottom = "9px";
    textbox.style.bottom = "4px";
  } else if (pos >= 810 && pos < 910) {
    walpaper.style.height = "1030px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + "w");
    micc.style.bottom = "13px";
    textbox.style.bottom = "0px";
  } else if (pos >= 910 && pos < 1010) {
    walpaper.style.height = "1130px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + "w");
    micc.style.bottom = "18px";
    textbox.style.bottom = "-13px";
  } else if (pos >= 1010 && pos < 1200) {
    walpaper.style.height = "1280px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + "w");
    micc.style.bottom = "26px";
    textbox.style.bottom = "-18px";
  } else if (pos >= 1200 && pos < 1300) {
    walpaper.style.height = "1380px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + "w");
    micc.style.bottom = "30px";
  } else if (pos >= 1300 && pos < 1450) {
    walpaper.style.height = "1500px";
    pos = pos + "px";
    console.log(pos);
    console.log(walpaper.style.height + "w");
    micc.style.bottom = "35px";
  } else {
    pos = pos + "px";
    console.log(pos);
  }
}

function alertdate() {
  alert(
    "Add Date From this messaage. -- NOTE:_ ( add date first then add message )"
  );
}
// profile pic upload and set
function profilepic() {
  var file = document.getElementById("profileinput").files;
  if (file.length > 0) {
    let fileReader = new FileReader();

    fileReader.onload = function (event) {
      document
        .getElementById("uploadprofile")
        .setAttribute("src", event.target.result);
    };

    fileReader.readAsDataURL(file[0]);
  }
}
// walpaper upload and set
function walpaperchange() {
  var file = document.getElementById("walpaperinput").files;
  if (file.length > 0) {
    let walpaperReader = new FileReader();

    walpaperReader.onload = function (event) {
      document
        .getElementById("walpaper")
        .setAttribute("src", event.target.result);
    };

    walpaperReader.readAsDataURL(file[0]);
  }
}
// default walpaper

let defaultwalpaper = () => {
  document
    .getElementById("walpaper")
    .setAttribute("src", "images/walpaper.jpg");
};
// * them color
let color = (gcolor) => {
  // let wcolor = document.getElementById(color);
  console.log(gcolor);
  document.getElementById("namesection").style.backgroundColor = gcolor;
};
let defaultcolor = () => {
  document.getElementById("namesection").style.backgroundColor = "#008069";
};
// document.getElementById("defaultcolor").addEventListener(onclick, defaultcolor);
function setdata() {
  // declare ids
  let name = document.getElementById("name");
  let online = document.getElementById("online");

  // declate form data
  let setname = document.getElementById("setname");
  let setonline = document.getElementById("setonline");
  // set data
  name.innerHTML = setname.value;
  online.innerHTML = setonline.value;

  //  footer message
  let fmessage = document.getElementById("setfmessage");
  let setfmessage = document.getElementById("fmessage");
  let checkmessage = document.getElementById("setfmessage").value;
  toString(checkmessage);
  // console.log(checkmessage);
  if (checkmessage.length > 7 || checkmessage.length < 7) {
    document.getElementById("fmessage").style.color = "black";
    document.getElementById("line1").style.display = "none";
    document.getElementById("line2").style.display = "block";
  }
  if (checkmessage.length == 7) {
    document.getElementById("fmessage").style.color = "#65797a";
    document.getElementById("line2").style.display = "none";
    document.getElementById("line1").style.display = "block";
  }
  setfmessage.innerHTML = fmessage.value;
  // footer end
}

//   <!--download div to image  -->  div to image liberary
// <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js"></script>

// SHOW screenshot | SHOW screenshot | SHOW screenshot | SHOW screenshot | SHOW screenshot |
function imgfun() {
  var node = document.getElementById("screenshot");
  domtoimage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

// SAVE screenshot | SAVE screenshot | SAVE screenshot | SAVE screenshot | SAVE screenshot
function fsave() {
  domtoimage
    .toJpeg(document.getElementById("screenshot"), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
}

//extra data commented

//   <script type="text/javascript">
//     function autoClick() {
//       $("#download").click();
//     }

//     $(document).ready(function () {
//       var element = $("#screenshot");

//       $("#download").on('click', function () {

//         html2canvas(element, {
//           onrendered: function (canvas) {
//             var imageData = canvas.toDataURL("image/jpg");
//             var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
//             $("#download").attr("download", "image.jpg").attr("href", newData);
//           }
//         });

//       });
//     });
//   </script>

//   <!-- an other div to image  -->
//   <!-- <script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>

// // A function to convert the required div to image
// function doCapture() {
//   window.scrollTo(0, 0);
//   html2canvas(document.getElementById("screenshot")).then(function (canvas) {

//     // Get the image data as JPEG and 0.9 quality (0.0 - 1.0)
//     console.log(canvas.toDataURL("image/jpeg", 0.9));
//   });

//   // Create an AJAX object
//   var ajax = new XMLHttpRequest();

//   // Setting method, server file name, and asynchronous
//   ajax.open("POST", "save-capture.php", true);

//   // Setting headers for POST method
//   ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   // Sending image data to server
//   ajax.send("image=" + canvas.toDataURL("image/jpeg", 0.9));

//   // Receiving response from server
//   // This function will be called multiple times
//   ajax.onreadystatechange = function () {

//     // Check when the requested is completed
//     if (this.readyState == 4 && this.status == 200) {

//       // Displaying response from server
//       console.log(this.responseText);
//     }
//   };

// }

//   <button onclick="doCapture();">Capture</button> -->
