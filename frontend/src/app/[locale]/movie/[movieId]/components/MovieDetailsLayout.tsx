import { MovieDetails } from "@/types/movie";
import Image from "next/image";

interface MovieDetailsLayoutProps {
  movieId: string;
}

const MovieDetailsLayout = async ({ movieId }: MovieDetailsLayoutProps) => {
  const data = await fetch(`${process.env.API_URL}/movie/${movieId}`);
  const movieDetails = (await data.json()) as MovieDetails;

  return (
    <>
      <div className="relative w-full">
        <Image
          className="object-cover w-full"
          width={1000}
          height={1000}
          src={`${process.env.POSTER_PATH}/${movieDetails.backdrop_path}`}
          alt={`${movieDetails.title} poster`}
        />
        <div className="absolute bottom-0 ">
          <Image
            className="h-max w-max"
            width={300}
            height={300}
            src={`${process.env.POSTER_PATH}/${movieDetails.poster_path}`}
            alt={`${movieDetails.title} poster`}
          />
        </div>
      </div>
      <div>{movieDetails.overview}</div>;
    </>
  );
};

export default MovieDetailsLayout;
