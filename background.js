chrome.tabs.onUpdate.addListener((tabId,tab) =>{
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParmeters = tab.url.split("?")[1];
        const urlParameters = URLSearchParams(queryParmeters);
        console.log(urlParameters);


        chrome.tabs.sendMessage(tabId, {
            type:"NEW",
            vudeId: urlParameters.get("v")
        });
    }
});