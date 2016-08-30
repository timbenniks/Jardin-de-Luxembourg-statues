var keystone = require('keystone');
var Types = keystone.Field.Types;

var Categorisation = new keystone.List('Categorisation', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Categorisation.add({
	name: { type: String, required: true },
  description: { type: Types.Text }
});

Categorisation.defaultColumns = 'name';
Categorisation.register();
