/*
 *  helloesm. Copyright (c) 2018 HWALab. MIT License.
 *  https://www.hwalab.com/helloesm/
 */

/**
 * Hello
 * @returns {void}
 */
export function helloEsm() {
    console.log("helloESM");
    document.getElementById("noJs").hidden = true;
    document.getElementById("noEsm").hidden = true;
    document.getElementById("yesEsm").hidden = false;
}
