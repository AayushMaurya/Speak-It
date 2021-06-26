var menuItem = {
    "id": "speak",
    "title": "Speak text",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickedData){
    if(clickedData.menuItemId == "speak" && clickedData.selectionText)
    {
        chrome.storage.sync.get('rate', function(speed){
            console.log("speed is :", speed);
            chrome.tts.speak(clickedData.selectionText, {rate: parseInt(speed)});
            console.log("The if conditions is working");
        });
    }
});