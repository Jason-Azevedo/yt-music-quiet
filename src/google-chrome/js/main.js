"use strict";

export default class YTMusicQuiet {
  constructor(document) {
    this.document = document;

    // Perform init actions.
    console.log("Test!!");
  }

  registerListeners() {
    console.log("Registering listeners");
  }

  // UI events?
}

/********** APP SETUP **********/

const ytMusicQuiet = new YTMusicQuiet();

// Register listeners
ytMusicQuiet.registerListeners();
