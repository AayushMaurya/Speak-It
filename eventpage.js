var menuItem = {
    "id": "speak",
    "title": "Speak text",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickedData){
    if(clickedData.menuItemId == "speak" && clickedData.selectionText)
    {
        chrome.tts.speak(clickedData.selectionText, {rate: 0.8});
        console.log("The if conditions is working");
    }
});