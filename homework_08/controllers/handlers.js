const fs = require('fs');
fs.readFile('data/storage.json', (err, content) => {
  if (err) {
    console.log('error happened during reading the file')
     console.log(err)
  } else {

  let stars = JSON.parse(content);
}
});

exports.getItem = (req, res) => {
	res.status(200).send(stars);
};

exports.createNewItem = (req, res) => {
	if (stars.find(c => {c.name == req.body.name}))
		 { res.sendStatus(409)}
  	 else {
  	 	const star = {
			id: stars.length + 1,
			name: req.body.name,
			band: req.body.band,
			instrument: req.body.instrument
		};

  	 	stars.push(star);
	  	res.sendStatus(201).send(star);
	  }
};

exports.updateItem = (req, res) => {
	let star = stars.find(star => stars.id === parseInt(req.params.id));
	if (!star)	{
	 res.sendStatus(404);
	} else {
		star.name = req.body.name;
		star.band = req.body.band;
		star.instrument = req.body.instrument;
		res.sendStatus(200).send(star);
	}
};

exports.getItemById = (req, res) => {
	let star = stars.find(star => stars.id === parseInt(req.params.id));
	if (!star)	{ res.sendStatus(404);}
	else {
		res.sendStatus(200).send(star);
	}
}

exports.removeItemById = (req, res) => {
	let star = stars.find(star => stars.id === parseInt(req.params.id));
	if (!star)	{ res.sendStatus(404);
	} else {
		let id = stars.indexOf(star);
		stars.splice(id,1);
		res.sendStatus(200).send({ "message": "Musician has been successfully removed"});
	}
}
