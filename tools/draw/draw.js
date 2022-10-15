function colorChange(data) {
    color = data;
    document.getElementById("editBox").style.border = `2px solid ${color}`;
  }
  
  window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    // var heightRatio = 1.5;
    // canvas.height = canvas.width * heightRatio;
  
    //resizing
    canvas.width = 600;
    canvas.height = 300;
  
    //event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("touchend", endPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);
    document.querySelector("#clear").addEventListener("click", clearCanvas);
    document.querySelector("#undo").addEventListener("click", undo);
    document.querySelector("#save").addEventListener("click", save);
  
    //variables
    let painting = false;
    let restore = [];
    let i = -1;
  
    //functions
    function startPosition(e) {
      painting = true;
      draw(e);
    }
  
    function endPosition() {
      painting = false;
      ctx.beginPath();
      if (!painting) {
        restore.push(ctx.getImageData(0, 0, 650, 350));
        i += 1;
      }
    }
  
    function draw(e) {
      if (!painting) {
        return;
      }
  
      e.preventDefault();
      ctx.lineWidth = document.getElementById("vol").value;
      ctx.lineCap = "round";
  
      //adds a new point and creates a lineTo
      if (e.type == "touchmove") {
        ctx.lineTo(
          e.touches[0].clientX - canvas.offsetLeft,
          e.touches[0].clientY - canvas.offsetTop
        );
      } else if (e.type == "mousemove") {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      }
      //draw graphics as per context object
      ctx.stroke();
      ctx.strokeStyle = color;
      ctx.beginPath();
      //moves the path to the specified point
      if (e.type == "touchmove") {
        ctx.moveTo(
          e.touches[0].clientX - canvas.offsetLeft,
          e.touches[0].clientY - canvas.offsetTop
        );
      } else if (e.type == "mousemove") {
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      }
    }
    //clear all drawing
    function clearCanvas() {
      ctx.clearRect(0, 0, 650, 350);
      restore.length = 0;
      i = -1;
    }
    //undo drawing
    function undo() {
      if (i <= 0) {
        clearCanvas();
      } else {
        i -= 1;
        restore.pop();
        ctx.putImageData(restore[i], 0, 0);
      }
    }
    //Save drawings in devices
    function save() {
      let link = document.createElement("a");
      link.download = "download.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  });
  