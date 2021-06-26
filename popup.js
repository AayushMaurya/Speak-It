$(document).ready(function(){
    chrome.storage.sync.set({'rate': 0.8});
    $('#submit').click(function(){
        chrome.storage.sync.set({'rate': $('#speed').val()});
        console.log($('#speed').val());
    });
});