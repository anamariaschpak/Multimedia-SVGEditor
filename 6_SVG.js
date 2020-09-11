window.onload = function() {
  var mode = "";
  var svg = document.getElementById("svgContainer");
  var NS = "http://www.w3.org/2000/svg";
  var filter = "";

  var btnBigger = document.getElementById("btnBigger");
  btnBigger.addEventListener("click", () => {
    mode = "bigger";
  });

  var btnSmaller = document.getElementById("btnSmaller");
  btnSmaller.addEventListener("click", () => {
    mode = "smaller";
  });

  var btnBlur = document.getElementById("btnBlur");
  btnBlur.addEventListener("click", () => {
    filter = "blur";
  });

  var btnHueRotate = document.getElementById("btnHueRotate");
  btnHueRotate.addEventListener("click", () => {
    filter = "hueRotate";
  });

  var btnSaturate = document.getElementById("btnSaturate");
  btnSaturate.addEventListener("click", () => {
    filter = "saturate";
  });

  var btnCursor = document.getElementById("btnCursor");
  btnCursor.addEventListener("click", () => {
    mode = "select";
  });

  var btnLine = document.getElementById("btnLine");
  btnLine.addEventListener("click", () => {
    mode = "line";
  });

  var cx;
  var cy;
  var btnCircle = document.getElementById("btnEllipse");
  btnCircle.addEventListener("click", () => {
    mode = "circle";
  });

  var rectX;
  var rectY;
  var btnRect = document.getElementById("btnRect");
  btnRect.addEventListener("click", () => {
    mode = "rectangle";
  });

  // var btnPolygon = document.getElementById("btnPolygon");
  // btnPolygon.addEventListener("click", () => {
  //   mode = "polygon";
  // });

  var btnAddText = document.getElementById("btnAddText");
  btnAddText.addEventListener("click", () => {
    mode = "text";
  });

  svg.addEventListener("mousedown", event => {
    if (mode == "line") {
      element = document.createElementNS(NS, "line");
      console.log("X1: " + event.clientX + " Y1: " + event.clientY);
      element.setAttribute("x1", event.clientX);
      element.setAttribute("y1", event.clientY);
    }
    if (mode == "circle") {
      element = document.createElementNS(NS, "circle");
      element.setAttribute("cx", event.clientX);
      cx = event.clientX;
      element.setAttribute("cy", event.clientY);
      cy = event.clientY;
    }

    if (mode == "rectangle") {
      element = document.createElementNS(NS, "rect");
      element.setAttribute("x", event.clientX);
      rectX = event.clientX;
      element.setAttribute("y", event.clientY);
      rectY = event.clientY;
    }
  });

  svg.addEventListener("mouseup", event => {
    if (mode == "line") {
      mode = "none";
      console.log("X2: " + event.clientX + " Y2: " + event.clientY);
      element.setAttribute("x2", event.clientX);
      element.setAttribute("y2", event.clientY);
      element.setAttribute("stroke", "black");
      svg.appendChild(element);

      if (filter == "blur") {
        filter = "none";
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        element = document.elementFromPoint(x, y);
        element.setAttribute("filter", "url(#blur)");
      }

      if (filter == "hueRotate") {
        mode = "none";
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        element = document.elementFromPoint(x, y);
        element.setAttribute("filter", "url(#hueRotate)");
      }

      if (filter == "saturate") {
        mode = "none";
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        element = document.elementFromPoint(x, y);
        element.setAttribute("filter", "url(#saturate)");
      }
    }

    if (mode == "circle") {
      mode = "none";
      var releaseX = event.clientX;
      var releaseY = event.clientY;
      var radius = Math.sqrt(
        Math.pow(releaseX - cx, 2) + Math.pow(releaseY - cy, 2)
      );
      element.setAttribute("r", radius);
      svg.appendChild(element);

      element.addEventListener("click", () => {
        if (filter == "blur") {
          filter = "none";
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;

          element = document.elementFromPoint(x, y);
          element.setAttribute("filter", "url(#blur)");
        }

        if (filter == "hueRotate") {
          mode = "none";
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;

          element = document.elementFromPoint(x, y);
          element.setAttribute("filter", "url(#hueRotate)");
        }

        if (filter == "saturate") {
          mode = "none";
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;

          element = document.elementFromPoint(x, y);
          element.setAttribute("filter", "url(#saturate)");
        }

        if (mode == "bigger") {
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          element = document.elementFromPoint(x, y);

          var radius = Number(element.getAttribute("r")) + 10;
          element.setAttribute("r", radius);
        }

        if (mode == "smaller") {
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          element = document.elementFromPoint(x, y);

          var radius = Number(element.getAttribute("r")) - 5;
          element.setAttribute("r", radius);
        }
      });
    }

    if (mode == "rectangle") {
      mode = "none";
      var width = Math.abs(event.clientX - rectX);
      var height = Math.abs(event.clientY - rectY);
      element.setAttribute("height", height);
      element.setAttribute("width", width);
      svg.appendChild(element);

      element.addEventListener("click", e => {
        if (filter == "blur") {
          filter = "none";
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;

          element = document.elementFromPoint(x, y);
          element.setAttribute("filter", "url(#blur)");
        }

        if (filter == "hueRotate") {
          mode = "none";
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;

          element = document.elementFromPoint(x, y);
          element.setAttribute("filter", "url(#hueRotate)");
        }

        if (filter == "saturate") {
          mode = "none";
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;

          element = document.elementFromPoint(x, y);
          element.setAttribute("filter", "url(#saturate)");
        }

        if (mode == "bigger") {
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          element = document.elementFromPoint(x, y);

          var width = Number(element.getAttribute("width")) + 10;
          var height = Number(element.getAttribute("height")) + 10;
          element.setAttribute("width", width);
          element.setAttribute("height", height);
        }

        if (mode == "smaller") {
          var rect = event.target.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          element = document.elementFromPoint(x, y);

          var width = Number(element.getAttribute("width")) - 10;
          var height = Number(element.getAttribute("height")) - 10;
          element.setAttribute("width", width);
          element.setAttribute("height", height);
        }
      });
    }

    if (mode == "text") {
      element = document.createElementNS(NS, "text");
      element.setAttribute("x", event.clientX);
      element.setAttribute("y", event.clientY);
      element.setAttribute("contentEditable", "true");
      element.setAttribute("width", "auto");
      // element.addEventListener("doubleclick");
      var textNode = document.createTextNode("Write something here...");
      element.appendChild(textNode);
      svg.appendChild(element);

      element.addEventListener("dblclick", ev => {
        var body = document.getElementById("wrapper");
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Edit your text here...";

        body.appendChild(input);

        input.addEventListener("keypress", e => {
          if (e.keyCode === 13) {
            console.log("test");
            textNode.textContent = input.value;
            body.removeChild(input);
          }
        });
      });
    }
  });
};
