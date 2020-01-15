var statusElement = document.getElementById("console-status");
var progressElement = document.getElementById("progress");

var consoleLogs = "";

function consoleLog(text) {
  consoleLogs += text + "\n";
}

var Module = {
  preRun: [],
  postRun: [
    function () {
      // handle scripten c api
      scriptenCApi();
      // restore blockly workspace
      // restoreBlocklyWorkspace();
    }
  ],
  print: (function () {
    var element = document.getElementById("output");
    if (element) element.value = ""; // clear browser cache
    return function (text) {
      if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(" ");
      consoleLog(text);
      if (element) {
        element.value += text + "\n";
        element.scrollTop = element.scrollHeight;
      }
    };
  })(),
  printErr: function (text) {
    if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(" ");
    consoleLog(text);
  },
  canvas: (function () {
    var canvas = document.getElementById("canvas");
    canvas.addEventListener(
      "webglcontextlost",
      function (e) {
        alert("WebGL context lost. You will need to reload the page.");
        e.preventDefault();
      },
      false
    );

    return canvas;
  })(),
  setStatus: function (text) {
    if (!Module.setStatus.last) Module.setStatus.last = { time: Date.now(), text: "" };
    if (text === Module.setStatus.last.text) return;
    var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    var now = Date.now();
    if (m && now - Module.setStatus.last.time < 30) return;
    Module.setStatus.last.time = now;
    Module.setStatus.last.text = text;
    if (m) {
      text = m[1];
      progressElement.value = parseInt(m[2]) * 100;
      progressElement.max = parseInt(m[4]) * 100;
      progressElement.hidden = false;
    } else {
      progressElement.value = null;
      progressElement.max = null;
      progressElement.hidden = true;
    }
    consoleLog(text);
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(
      left
        ? "Preparing... (" + (this.totalDependencies - left) + "/" + this.totalDependencies + ")"
        : "All downloads complete."
    );
  }
};
Module.setStatus("Downloading...");
window.onerror = function (event) {
  Module.setStatus("Exception thrown, see JavaScript console");
  Module.setStatus = function (text) {
    if (text) Module.printErr("[post-exception status] " + text);
  };
};
