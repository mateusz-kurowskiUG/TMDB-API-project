import { SimplifiedMovie } from "@/types/movie";
import Image from "next/image";

interface PopularMovieProps {
  movie: SimplifiedMovie;
}
const PopularMovie = ({ movie }: PopularMovieProps) => (
  <Image
    width={300}
    height={300}
    src={`${process.env.POSTER_PATH}/${movie.poster_path}`}
    alt={movie.original_title}
  />
);

export default PopularMovie;
