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
    // TODO: Implement listeners
  }
}

/********** APP SETUP **********/

new YTMusicQuiet();
