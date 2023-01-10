chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
  chrome.webRequest.onCompleted.addListener((httpRequest) => {
      if (httpRequest.url.startsWith(request.listenOnRequest)) {
        sendResponse({ completedShortenURL: true })
      }
    },
    {urls: ["<all_urls>"]}
  )
  return true
})

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['product-extractor.js']
  });
});