import React, {useEffect} from 'react';

function Picker(data) {
	useEffect(() => {
		picker.setVisible(data.visible);
	});
	const { google } = window;
	var developerKey = 'AIzaSyAwb36hcv3n6t2_Bw8-HWY62wP-51N53jo';
	var appId = "44564559305";

	const view = new google.picker.View(google.picker.ViewId.DOCS);
	view.setMimeTypes('image/png,image/jpeg,image/jpg');
	
	const picker = new google.picker.PickerBuilder()
		.enableFeature(google.picker.Feature.NAV_HIDDEN)
		.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
		.setAppId(appId)
		.setOAuthToken(data.oauthToken)
		.addView(view)
		.addView(new google.picker.DocsUploadView())
		.setDeveloperKey(developerKey)
		.setCallback(data.onSelect)
		.setOrigin('https://mc.s11.exacttarget.com/')
		.build();
		picker.setVisible(data.visible);

	return ('');
}

export default Picker