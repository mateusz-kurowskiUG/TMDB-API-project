import type { SchemaObject } from "neode";
const movieSchema: SchemaObject = {
	id: {
		type: "string",
		// type: "uuid",
		primary: true,
		unique: true,
	},
	TMDBId: {
		type: "integer",
		required: true,
		unique: true,
	},
	title: {
		type: "string",
		required: true,
	},
	overview: {
		type: "string",
	},
	popularity: {
		type: "number",
		required: true,
	},
	release_date: {
		type: "string",
		required: true,
	},
	poster_path: {
		type: "string",
	},
	ovierview: {
		type: "string",
	},
	adult: {
		type: "boolean",
		required: true,
	},
	backdrop_path: {
		type: "string",
		allow: "",
	},
	budget: {
		type: "number",
	},
	status: {
		type: "string",
	},
	has: {
		type: "relationship",
		target: "Watchlist",
		relationship: "HAS",
		direction: "in",
		properties: {
			name: "string",
		},
		cascade: "detach",
		eager: true,
	},
	reviewed: {
		type: "relationships",
		target: "User",
		relationship: "REVIEWED",
		direction: "in",
		properties: {
			id: "uuid",
			content: "string",
			rating: "number",
			date: "date",
		},
		cascade: "detach",
		eager: true,
	},
	genre: {
		type: "nodes",
		target: "Genre",
		relationship: "GENRE",
		direction: "out",
		properties: {
			date: "datetime",
		},
		cascade: "detach",
		eager: true,
	},
	cast: {
		type: "nodes",
		target: "Cast",
		relationship: "CAST",
		direction: "in",
		properties: {
			character: "string",
			job: "string",
		},
		cascade: "detach",
		eager: true,
	},
};
export default movieSchema;
