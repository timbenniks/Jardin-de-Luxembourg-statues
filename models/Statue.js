var keystone = require('keystone');
var Types = keystone.Field.Types;

var Statue = new keystone.List('Statue', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Statue.add({
	name: { type: String, required: true },
  lat: { type: Number },
  lng: { type: Number },
  image: { type: Types.CloudinaryImage, initial: false },
  year: { type: Number },
  content: { type: Types.Html, wysiwyg: true, height: 200 },
  categorisation: { type: Types.Relationship, ref: 'Categorisation', many: true },
  depicted: { type: Types.Relationship, ref: 'Depicted', many: true },
  sculptor: { type: Types.Relationship, ref: 'Sculptor', many: true },
  sources: { type: Types.Relationship, ref: 'Source', many: true }
});


Statue.defaultColumns = 'name, type, year, depicted, sculptor';
Statue.register();
