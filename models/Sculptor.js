var keystone = require('keystone');
var Types = keystone.Field.Types;

var Sculptor = new keystone.List('Sculptor', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Sculptor.add({
	name: { type: String, required: true },
  url: { type: Types.Url },
	birthYear: { type: Number },
	deceasedYear: { type: Number },
	birthplace: { type: String },
	nationality: { type: String },
	bio: { type: Types.Html, wysiwyg: true, height: 200 },
	sources: { type: Types.Relationship, ref: 'Source', many: true }
});

Sculptor.defaultColumns = 'name, birthYear, deceasedYear, birthplace, nationality';
Sculptor.register();
