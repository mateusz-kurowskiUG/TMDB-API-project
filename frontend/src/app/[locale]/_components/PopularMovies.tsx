import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { GetPopularMoviesResponse } from "../../../types/movie";
import PopularMovie from "./PopularMovie";
import { Link } from "@/i18n/navigation";
const PopularMovies = async () => {
  const data = await fetch(`${process.env.API_URL}/movie/popular`);
  const movies = (await data.json()) as GetPopularMoviesResponse;

  return (
    <div className="">
      <h2 className="text-3xl">
        <Link href={"/movies/discover/popular"}>Popular movies</Link>
      </h2>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {movies.results.map((m) => (
            <CarouselItem
              className="basis-1/2 sm:basis-1/3 md:basis-1/4  lg:basis-1/6 xl:basis-1/7 2xl:basis-1/8"
              key={m.id}
            >
              <Link href={`/movie/${m.id}`}>
                <PopularMovie movie={m} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default PopularMovies;
