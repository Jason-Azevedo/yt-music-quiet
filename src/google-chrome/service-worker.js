// TODO: Figure out how to manage the audio of the tabs.

/////////////////// EVENT HANDLING ///////////////////

// Leaving this here for now... could be of use in the future.
chrome.tabs.onCreated.addListener((tab) => {
  console.log("Tab was created.");
});

// TODO: We need to listen for new tabs being created.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete" || !isYouTubeMusicUrl(tab.url)) return;

  console.log("We are running on youtube music. Potentially multiple times.");

  // TODO: Manage youtube music tab volume.
});

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
