var exec = require('child_process').exec;

module.exports = function(paperpress){
	return function (req, res) {
		if(req.query.key === process.env.WEBHOOK_KEY){
			exec('git pull --rebase origin master', function (error) {
				if (error ) { return res.send(500, error); }

				paperpress.readArticles();
				res.send({sucess:true});
			});
		}else{
			res.send(403, 'forbidden');
		}
	};
};