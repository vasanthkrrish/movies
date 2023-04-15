import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, release_date, poster_path }) {
  const image_path = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <Link href={`/movie/${id}`} key={id}>
        <Image
          src={image_path + poster_path}
          width={400}
          height={400}
          alt={title}
        />
      </Link>
    </>
  );
}
