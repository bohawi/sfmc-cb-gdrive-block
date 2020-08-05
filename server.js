const hbs = require('hbs');
const express = require('express');

const app = express();

hbs.localsAsTemplateData(app);

Object.assign(app.locals, {
	developerKey: process.env.GOOGLE_DEVELOPER_KEY,
	appId: process.env.GOOGLE_APP_ID,
	clientId: process.env.GOOGLE_CLIENT_ID
})

app.set('views', './views')
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	res.render('index')
});
app.use('/', express.static('dist'));
app.get('/assets', express.static('node_modules/@salesforce-ux'));

app.listen(process.env.PORT || 3000, function () {console.log('Example app listening on port 3000!');});

