import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');


var pickerApiLoaded = true;
var driveApiLoaded = true;

// Use the Google API Loader script to load the google.picker script.
window.loadPicker = function loadPicker() {
	gapi.load('auth:client', onAuthApiLoad);
	gapi.load('picker', {'callback': onPickerApiLoad});
}

function onAuthApiLoad() {
	window.gapi.auth.authorize(
		{
		'client_id': window.app.clientId,
		'scope': window.app.scope,
		'immediate': false
		},
		handleAuthResult);
}

function onPickerApiLoad() {
	pickerApiLoaded = true;
	render();
}

function onDriveApiLoad() {
	driveApiLoaded = true;
	render();
}

function handleAuthResult(authResult) {
	if (authResult && !authResult.error) {
		window.app.oauthToken = authResult.access_token;

		gapi.client.load('drive', 'v3', onDriveApiLoad);
	}
}

// Create and render a Picker object for searching images.
function render() {
	if (pickerApiLoaded && driveApiLoaded && window.app.oauthToken) {
		const domContainer = document.querySelector('#main');
		ReactDOM.render(React.createElement(App), domContainer);
	}
}
