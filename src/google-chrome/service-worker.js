"use strict";

import Logger from "./js/logger.js";
import ServiceMessages from "./js/serviceMessages.js";

/////////////////// SETUP ///////////////////

const logger = new Logger("service_worker");

/////////////////// MESSAGE HANDLERS ///////////////////

chrome.action.onClicked.addListener((tab) => {
  // Dum...
  scaleChromeTabVolumeAsync(tab, null);
});

// Handle requests from the UI or content script
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  logger.info(`Received message: ${message}`);

  switch (message) {
    case ServiceMessages.scaleVolume:
      const tempScale = 0.5;

      // await scaleChromeTabVolumeAsync(sender.tab, tempScale);
      break;
  }
});

/////////////////// LOGIC METHODS ///////////////////

/**
 * Scales the given chrome tabs volume by the scaleFactor amount.
 *
 * @param {*} tab The tabs who's volume to scale.
 * @param {*} scaleFactor The scale factor amount used for scaling.
 */
async function scaleChromeTabVolumeAsync(tab, scaleFactor = 0.5) {
  // Capture the audio from the tab
  const audioMediaStream = await chrome.tabCapture.getMediaStreamId({
    targetTabId: tab.id,
  });
  // console.log(stream);
  // TODO: Get the node gain.
  // TODO: Scale it.
  console.log(`Here is the id: ${audioMediaStream}`);
}

/////////////////// HELPER FUNCTIONS ///////////////////
