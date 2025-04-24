import type MovieInterface from "./Movie";

interface PlaylistInterface {
	id: string;
	name: string;
	date: Date;
	movies?: MovieInterface[];
	checksum?: string;
}
export default PlaylistInterface;
