"use strict";

import Logger from "./js/logger.js";

/////////////////// SETUP ///////////////////

const logger = new Logger("service_worker");

// Leaving this here for now... could be of use in the future.
chrome.tabs.onCreated.addListener((tab) => {
  console.log("Tab was created.");
});

// TODO: We need to listen for new tabs being created.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete" || !isYouTubeMusicUrl(tab.url)) return;

  console.log("We are running on youtube music. Potentially multiple times.");

  // TODO: Manage youtube music tab volume.
  scaleChromeTabVolume(tab, 0.5);
});

/////////////////// MESSAGE HANDLERS ///////////////////

// TODO: Handle requests from the UI

/////////////////// LOGIC METHODS ///////////////////

/**
 * Scales the given chrome tabs volume by the scaleFactor amount.
 *
 * @param {*} tab The tabs who's volume to scale.
 * @param {*} scaleFactor The scale factor amount used for scaling.
 */
async function scaleChromeTabVolume(tab, scaleFactor = 1) {
  if (!tab) {
    logger.warning("scaleChromeTabVolume: invalid tab suppied.");
    return;
  }

  const stream = await chrome.tabCapture.capture({ audio: true });

  console.log(stream);

  // TODO: Get the node gain.
  // TODO: Scale it.
}

/////////////////// HELPER FUNCTIONS ///////////////////

/**
 * Checks whether the given url is youtube music.
 *
 * @param {*} url The url to check if its youtube music.
 * @returns True if the url is youtube music otherwise false.
 */
function isYouTubeMusicUrl(url) {
  const regex = /^https?:\/\/music\.youtube\.com/;
  return regex.test(url);
}
