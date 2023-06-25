import Image from "next/image";

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();
//   return res.results.map((movie) => ({
//     movie: `movie/${toString(movie.id)}`,
//   }));
// }

export default async function Detail({ params }) {
  const { movie } = params;
  const image_path = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <>
      <h1 className="text-2xl">{res.title}</h1>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-2 rounded">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={image_path + res.backdrop_path}
        width={1000}
        height={1000}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </>
  );
}
