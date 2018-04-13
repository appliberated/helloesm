/*
 *  helloesm. Copyright (c) 2018 HWALab. MIT License.
 *  https://www.hwalab.com/helloesm/
 */

/* eslint-disable strict */

(function () {
    "use strict";

    document.body.classList.add("body--no-esm");
    document.getElementById("emoji").innerText = "😞";
    document.getElementById("sublead").innerText = "Your browser handles JavaScript, but";
    document.getElementById("lead").innerText = "can't handle ECMAScript Modules";
    document.title = "helloesm: No ECMAScript Modules";
}());
