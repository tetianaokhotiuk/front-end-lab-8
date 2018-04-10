const fs = require('fs');
const rockstars = JSON.parse(fs.readFileSync('./data/storage.json'));


exports.getItem = (req, res) => {
	res.status(200).send(rockstars);
};

exports.createNewItem = (req, res) => {
	if (rockstars.find(rockstar => {rockstars.name == req.body.name}))
		 { res.sendStatus(409)}
  	 else {
  	 	const rockstar = {
			id: rockstars.length + 1,
			name: req.body.name,
			band: req.body.band,
			instrument: req.body.instrument
		};

  	 	rockstars.push(rockstar);
	  	res.sendStatus(201).send(rockstar);
	  }
};

exports.updateItem = (req, res) => {
	let rockstar = rockstars.find(rockstar => rockstars.id === parseInt(req.params.id));
	if (!rockstar)	{
	 res.sendStatus(404);
	} else {
		rockstar.name = req.body.name;
		rockstar.band = req.body.band;
		rockstar.instrument = req.body.instrument;
		res.sendStatus(200).send(rockstar);
	}
};

exports.getItemById = (req, res) => {
	let rockstar = rockstars.find(rockstar => rockstars.id === parseInt(req.params.id));
	if (!rockstar)	{ res.sendStatus(404);}
	else {
		 res.sendStatus(200).send(rockstar);
	}
};

exports.removeItemById = (req, res) => {
	let rockstar = rockstars.find(rockstar => rockstars.id === parseInt(req.params.id));
	if (!rockstar)	{ res.sendStatus(404);
	} else {
		let id = rockstars.indexOf(rockstar);
		rockstars.splice(id,1);
		res.sendStatus(200).send({ "message": "Musician has been successfully removed"});
	}
}
