import { Hero } from "@components/index.ts";
import { PageProps } from "$fresh/server.ts";

export default function Home({ params }: PageProps) {
  const { route } = params;

  return (
    <>
    <Hero />
      <h1>Route: {route} works!</h1>
    </>
  );
}
