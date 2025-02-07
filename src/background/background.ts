chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details);
    const url = details.url;
    //all images contain the static work in url thats why all images are block on newyork time website
    const filters = [
      "googleadsservices",
      "googlesyndication",
      "g.doubleclick",
      "static01",
    ];
    for (const filter of filters) {
      if (url.indexOf(filter) != -1) {
        return {
          cancel: true,
        };
      }
    }
    return {
      cancel: false,
    };
  },
  {
    urls: ["<all_urls>"],
  },
  ["blocking"]
);
