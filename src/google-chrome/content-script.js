/////////////////// EXEC ///////////////////

/**
 *
 * Here were are doing a quick Immediate Inovocation Function Expression, to register
 * our imports and call the method which communicates with the background service.
 *
 * As we can only configure the volume of the tab when the background service is invoked from the
 * extension on that tab. We won't have access otherwise.
 *
 * This will be injected and run on page load, the frontend extension popup will handle communications for
 * further changes later on.
 *
 */
(async () => {
  const getURL = chrome.runtime.getURL;
  const { default: ServiceMessages } = await import(
    getURL("js/serviceMessages.js")
  );

  // Invoke the backend service with our dependencies
  // await chrome.runtime.sendMessage(ServiceMessages.scaleVolume);

  chrome.desktopCapture.chooseDesktopMedia(["audio"], (streamId) => {
    console.log(`Here is the audio stream ID: ${streamId}`);
  });
})();
