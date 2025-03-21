import { defineLayout } from "$fresh/server.ts";

export default defineLayout(async (req, ctx) => {

  return (
    <div class="layout">
      <ctx.Component />
    </div>
  );
});