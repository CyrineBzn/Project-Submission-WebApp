/*
  The permitted SchemaTypes are

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
});*/


var mongoose = require('mongoose'),
	extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;


//Person Class
var PersonSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true }
});
module.exports = mongoose.model('Person', PersonSchema);

//Student Class
var StudentSchema = PersonSchema.extend({
	id_specialization: { type: Number, required: true },
	study_year: { type: Number, required: true }
});
module.exports = mongoose.model('Student', StudentSchema);

//Partner Class
var PartnerSchema = PersonSchema.extend({
	company: String
});
module.exports = mongoose.model('Partner', PartnerSchema);

//Administration Class
var AdministrationSchema = PersonSchema.extend({
	id_specialization: { type: Number, required: true }
});
module.exports = mongoose.model('Administration', AdministrationSchema);

//Comment Class
var CommentSchema = new Schema({
	author: { type: PersonSchema, required: true },
	content: { type: String, required: true }
});
module.exports = mongoose.model('Comment', CommentSchema);

//Project Class
var ProjectSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	id_specialization: { type: Array, required: true }, //(Number)
	study_year: { type: Array, required: true }, //(Number)
	keywords: { type: Array, required: true },  //(String)
	media_files: Array, //(String)
	status: { type: String, required: true },
	sub_date: { type: Date, default: Date.now }, 
	edit_date: { type: Date, default: Date.now }, 
	edit_key: { type: String, required: true }, 
	likes: Array, //(StudentSchema)
	comments: Array, //(CommentSchema)
	partner: {type : PartnerSchema, required:true}
})
module.exports = mongoose.model('Project', ProjectSchema);

//Specialization Class
var SpecializationSchema = new Schema({
	specialization_name: { type: String, required: true },
	school_name: { type: String, required: true },
	referent: String
});
module.exports = mongoose.model('Specialization', SpecializationSchema);

//ReferenceMajors Class (Every majors in each school)
var ReferenceMajorsSchema = new Schema({
	school_name: {type: String, required: true},
	study_year: {type: String, required: true}, 
	major_name: {type: String, required: true}
});
module.exports = mongoose.model('ReferenceMajor', ReferenceMajorsSchema);