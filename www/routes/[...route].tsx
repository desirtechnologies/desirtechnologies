import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Home({ params }: PageProps) {

  const { route } = params; 

  const count = useSignal(3);

  
  return (
    
  <>
  <h1>It Works!</h1>
  </>
  );
}
