/*
 *  HelloESM. Copyright (c) 2018-2020 Appliberated. MIT License.
 *  https://www.appliberated.com/helloesm/
 */

/* eslint-disable strict */

(function () {
    "use strict";

    document.body.classList.add("body--no-esm");
    document.getElementById("emoji").innerText = "😞";
    document.getElementById("sublead").innerText = "Your browser handles JavaScript, but";
    document.getElementById("lead").innerText = "can't handle ECMAScript Modules";
    document.title = "HelloESM: No ECMAScript Modules";

    // Update the theme-color meta tag to update the browser toolbar color
    document.querySelector("meta[name=theme-color]").setAttribute("content", "#FF9800");
}());
