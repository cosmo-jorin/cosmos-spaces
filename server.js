const express = require('express');
const helmet = require("helmet");
const path= require('path');
const app= express();
app.disable('x-powered-by');
app.use('/static', express.static('dist'));
app.use(helmet.hsts({maxAge: 7776000, force: true}));
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.hidePoweredBy());
app.use(helmet.referrerPolicy());
app.use(helmet.expectCt());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

app.use(function(req,res){
	res.sendFile(path.resolve('./src/app.html'));
});
app.listen(3100);
