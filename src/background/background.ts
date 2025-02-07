chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details);
    return {
      // cancel: true,
    };
  },
  {
    urls: ["<all_urls>"],
  },
  ["blocking"]
);
