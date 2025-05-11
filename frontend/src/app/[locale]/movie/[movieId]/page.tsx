import MovieDetailsLayout from "./components/MovieDetailsLayout";

interface MovieDetailsPageProps {
  params: Promise<{ movieId: string }>;
}

const Page = async ({ params }: MovieDetailsPageProps) => {
  const { movieId } = await params;
  return <MovieDetailsLayout movieId={movieId} />;
};

export default Page;
