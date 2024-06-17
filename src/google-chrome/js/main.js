"use strict";

import Logger from "./logger.js";

export default class YTMusicQuiet {
  constructor() {
    // Setup dependencies
    this.logger = new Logger("YTMusicQuiet");

    // Setup actions
    this.registerListeners();

    chrome.tabCapture.getMediaStreamId({}, (stream) => {
      console.log("Stream obtained");
    });
  }

  /////////////////////// METHODS ///////////////////////

  /**
   * Register listeners for the UI elements.
   */
  registerListeners() {
    const scalerNumberInput = document.getElementById("numberScaleInput");
    const scalerSliderInput = document.getElementById("sliderScaleInput");

    scalerNumberInput.addEventListener("change", (e) => {
      // Handle the new input.
      console.log(`Text input: ${e.target.value}`);

      // Call a method to automagically scale the volume.
    });

    scalerSliderInput.addEventListener("input", (e) => {
      // Handle the slider input.
      scalerNumberInput.value = e.target.value;

      // Call a method to automagically scale the volume.
    });
  }
}

/********** APP SETUP **********/

new YTMusicQuiet();
