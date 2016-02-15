var express = require('express'),
	errorHandler = require('errorhandler'),
	app = express();

var HOSTNAME = 'localhost',
	PORT = 8080,
	PUBLIC_DIR = __dirname + '/public_html';

var callback = function (req, res, done) {
	// Здесь нужно написать журналирование в формате
	// (журналирование - вывод в консоль)
	// [время] [номер запроса по счету]

	console.log("[%s] [%s]", new Date(), ++callback.counter);
	done();
}

callback.counter = 0;
app.use(callback);

app
	.use('/', express.static(PUBLIC_DIR))
	.use(errorHandler());

app.listen(PORT, function () {
	console.log("Simple static server showing %s listening at http://%s:%s", PUBLIC_DIR, HOSTNAME, PORT);
});