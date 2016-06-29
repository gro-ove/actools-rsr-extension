(function (){
    var s = document.getElementById('__cmext_style');
    if (s) s.parentNode.removeChild(s);
    s = document.createElement('style');
    s.id = '__cmext_style';
    document.head.appendChild(s);
    s.innerHTML = ''.slice.call(function(){/*
#__cmext_start_btn {
    display: block !important;
    position: fixed !important;
    bottom: 20px !important;
    right: 20px !important;
    width: 72px !important;
    height: 72px !important;
    border-radius: 2px !important;
    background: #A20025 !important;
    color: white !important;
    text-transform: uppercase !important;
    text-decoration: none !important;
    font-size: 13px !important;
    font-weight: bold !important;
    line-height: 27px !important;
    padding: 8px !important;
    text-align: center !important;
    color: #FFF !important;
}

#__cmext_start_btn:hover, #__cmext_start_btn:active {
    color: #FFF !important;
    background: #990024 !important;
    text-decoration: none !important;
}
    */}, 14, -3);

    var eventId = (location.href.match(/\beventId?=(\d+)\b/i)||{})[1];
    var carId = (location.href.match(/\bcar(?:Id)?=(\d+)\b/i)||{})[1];
    var trackId = (location.href.match(/\btrack(?:Id)?=(\d+)\b/i)||{})[1];

    if (eventId != null || carId != null && trackId != null){
        var cmEventId = eventId || trackId + '/' + carId;
        var button = document.createElement('a');
        button.id = '__cmext_start_btn';
        button.innerHTML = '<img src="' + chrome.extension.getURL('icon-48.png') + '"><br>Start';
        button.href = 'acmanager://rsr?id=' + encodeURIComponent(cmEventId);
        document.body.appendChild(button);
    }
    
    var ths = document.getElementsByTagName('th');
    for (var i=0; i<ths.length; i++) if (ths[i].innerHTML == 'Download') ths[i].innerHTML = 'Install';
    var hs = document.getElementsByTagName('a');
    for (var i=0, m; i<hs.length; i++) if (m = hs[i].href.match(/=download_setup&id=(\d+)/)) hs[i].href = 'acmanager://rsr/setup?id=' + m[1];
})();
