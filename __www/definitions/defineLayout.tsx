import { type PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <main class="layout-content">
    <Component />
  </main>
  );
}


const defineLayout = function() {

  return function(){
    return null 
  }
}