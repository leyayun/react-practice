'use strict';

import path form 'path';
import koa form 'koa';
import logger form 'koa-logger';
import serve form 'koa-static';
import route form 'koa-route';

import render form './lib/render';

let app = koa();

app.use(logger());
app.use(route.get('/', home));

function *home(){
	this.body = yield render('home', {});
}

app.use(serve(path.join(__dirname, 'build')));

app.listen(3000);
console.log('listening localhost:3000');