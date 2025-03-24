import { Hero } from "@components/index.ts";
import { PageProps } from "$fresh/server.ts";

export default function Home({ params }: PageProps) {


  return (
    <>
    <Hero />
    </>
  );
}

