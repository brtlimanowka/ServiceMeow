function openPage() {
    chrome.tabs.create({
      url: "https://oservice.service-now.com/incident.do?sys_id=-1&sysparm_view=&sysparm_view_forced=true"
    });
  }
  
  browser.browserAction.onClicked.addListener(openPage);