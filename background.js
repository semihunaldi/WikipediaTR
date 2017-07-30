chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
    var tabUrl = tab.url;
    var url = new URL(tabUrl);
    if(url.hostname.indexOf("0wikipedia") !== -1)
    {
        return;
    }
    if(url.hostname.indexOf("wikipedia") !== -1)
    {
        url.hostname = "tr.0wikipedia.org";
        chrome.tabs.update(tab.id, {url: url.toString()});
    }
});

