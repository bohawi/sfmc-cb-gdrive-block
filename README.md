# sampleblock
Sample Salesforce Marketing Cloud Content Builder Block using the [blocksdk](https://github.com/salesforce-marketingcloud/blocksdk).

## Deployment
As a node app:

```bash
npm install
npm start
```
One click deployment to heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Building your own block from here

```bash
# do not fork
git clone git@github.com:bohawi/sfmc-cb-gdrive-block.git <my block name e.g. myblock>
cd <my block name e.g. mybock>
# create your own empty github repository for your new block and copy the clone url for it
git remote set-url origin <your empty repo url>
npm install
```

Files to edit:

 * src/main.js for your code
 * views/index.hbs for your markup
 * package.json for your block name and description
 * README.md to be your own README
 
To test your changes locally:

```bash
npm run build; npm start
```

Then go to the block tester app and enter `http://localhost:3000` in the text field and click a block. You will have to allow unsecure iframes in your bowser (top right in the url bar in Chrome) first.

Once ready to deploy, commit your changes to your repo and click the deploy to heroku button on it.

## Google Integration

Create a Google API key with access to the Google Drive API - [https://console.developers.google.com/]

Create environment variables with your credentials from Google Developer Console:

GOOGLE_CLIENT_ID
GOOGLE_APP_ID
GOOGLE_DEVELOPER_KEY
