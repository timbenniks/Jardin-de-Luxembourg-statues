var keystone = require('keystone');
var Types = keystone.Field.Types;

var Source = new keystone.List('Source', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Source.add({
	name: { type: String, required: true },
  url: { type: String }
});

Source.defaultColumns = 'name, url';
Source.register();
