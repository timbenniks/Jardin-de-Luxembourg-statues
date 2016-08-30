var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';


	var Statue = keystone.list('Statue');

	Statue.model.find()
    //.where('state', 'published')
    .sort('-year')
		.populate( 'depicted sources sculptor categorisation' )
    .limit( 5 )
    .exec( function( err, statues ){
			locals.statues = statues;
			view.render( 'index' );
    } );
};
