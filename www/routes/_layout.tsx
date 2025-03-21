import { defineLayout } from "$fresh/server.ts";
import {Header, Footer} from "@includes/index.ts"


const ApplicationLayout = defineLayout(async (req, ctx) => {

  return (
    <div class="layout">
      <Header />
      <ctx.Component />
      <Footer />
    </div>
  );
});


export default ApplicationLayout;