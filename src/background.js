// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the "inject.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: "inject.js",
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    // do your things
    chrome.tabs.get(activeInfo.tabId, function (tab) {
      console.log(tab.url);
      if (tab.url.indexOf("strava.com") != -1) {
        chrome.tabs.executeScript(tab.ib, {
          file: "inject.js",
        });
      }
    });
  }
});
