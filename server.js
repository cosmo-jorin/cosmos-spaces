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
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//       ...helmet.contentSecurityPolicy.getDefaultDirectives(),
//       "script-src": ["'unsafe-eval'","'self'", 	"antoniogf.com", "polyfill.io","fonts.googleapis.com"],
// 	  "data": ["'unsafe-eval'","'self'", 	"antoniogf.com", "polyfill.io","fonts.googleapis.com"],
// 	  "font-src":["'unsafe-eval'","'self'", 	"antoniogf.com","fonts.googleapis.com", 'https://fonts.gstatic.com'],
// 	  "connect-src":["'unsafe-eval'","'self'", 	"antoniogf.com","fonts.googleapis.com", 'https://fonts.gstatic.com'],
	  
//     },
//   })
// );


app.use(function(req,res){
	res.sendFile(path.resolve('./src/app.html'));
});
app.listen(3100);
