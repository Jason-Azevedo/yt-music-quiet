"use strict";

import Logger from "./logger.js";

export default class YTMusicQuiet {
  constructor(document) {
    this.document = document;

    // Setup dependencies
    this.logger = new Logger("YTMusicQuiet");
  }

  // TODO: Implement method or class to override volume getter and setter on video elements.
}

/********** APP SETUP **********/

new YTMusicQuiet();
