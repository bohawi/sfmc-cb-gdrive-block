import React, { useState } from 'react';
import SDK from 'blocksdk';

import Preview from './Preview';
import Button from './Button';

import '../style.css';

const DEFAULT_WIDTH = 450;
const EXPANDED_WIDTH = 850;

function App() {
  const [ name, setName ] = useState('Please Select an Image');
  const [ url, setUrl ] = useState('data:image/png;base64,')

  const { google, gapi, app } = window;
  const { appId, oauthToken, developerKey} = app;

  const sdk = new SDK({
    blockEditorWidth: DEFAULT_WIDTH
  });

  // Default to S1, why not?
  let stack = 's1';

  sdk.getData((data) => {
    const { id, name, mimeType } = data;

    if (id)  {
      getFileBytes(id, mimeType);
    }

    if (name) {
      setName(name);
    }
  });

  sdk.getUserData((userData)=> {
    stack = userData.stack.toLowerCase();
  })

function fetchAssetData(id) {
  return gapi.client.drive.files.get({
    fileId: id,
    alt: 'media'
  })
    .then((fileData) => fileData.body);
}

// A simple callback implementation.
function pickerCallback(data) {
	if (data.action == google.picker.Action.PICKED) {
		const asset = data.docs[0];
    const { name, id, mimeType } = asset;
    
    setName(name);

    sdk.setData({
      name,
      id,
      mimeType
    });

    sdk.setBlockEditorWidth(DEFAULT_WIDTH);

    getFileBytes(id, mimeType);
	}
}

function getFileBytes (id, mimeType) {
  fetchAssetData(id)
    .then(function (fileData) {
			const fileDataLength = fileData.length;
			const byteArray = new Uint8Array(fileDataLength);
			
			for (var i = 0; i < fileDataLength; i++){
				byteArray[i] = fileData.charCodeAt(i);
			}

			const fileBlob = new Blob([byteArray], { type: mimeType });
			const reader = new FileReader();
			reader.onload = function(e) {
        const url = e.target.result;

        setUrl(url);

				sdk.setContent(`<img src="${url}"`);
			};
			reader.readAsDataURL(fileBlob);
		});
}

  function displayPicker() {
    const view = new google.picker.View(google.picker.ViewId.DOCS);
    view.setMimeTypes('image/png,image/jpeg,image/jpg');
    
    sdk.setBlockEditorWidth(EXPANDED_WIDTH);
    
    const picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setAppId(appId)
      .setOAuthToken(oauthToken)
      .addView(view)
      .addView(new google.picker.DocsUploadView())
      .setDeveloperKey(developerKey)
      .setCallback(pickerCallback)
      .setOrigin(`https://mc.${stack}.exacttarget.com/`)
      .build();
      picker.setVisible(true);
  }

  return (
    <div className="app-wrapper">
      <Preview
        name={name}
        url={url}
      />
      <Button
        label="Select an Image"
        onClick={displayPicker}
      />
    </div>
  );
}

export default App;