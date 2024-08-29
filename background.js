chrome.action.onClicked.addListener((tab) => {
	const viewSourceUrl = `view-source:${tab.url}`;
	chrome.tabs.create({ url: viewSourceUrl });
});
