chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
    var tabUrl = tab.url;
    var url = new URL(tabUrl);
    if(url.hostname.indexOf("0wikipedia") !== -1)
    {
        return;
    }
    if(url.hostname.indexOf("wikipedia") !== -1)
    {
        var prefix = extractPrefix(url.hostname);
        url.hostname = prefix + ".0wikipedia.org";
        chrome.tabs.update(tab.id, {url: url.toString()});
    }
});

function extractPrefix(hostname)
{
    if(hostname.indexOf(".") !== -1)
    {
        return hostname.substring(0,hostname.indexOf("."));
    }
    return "";
}
