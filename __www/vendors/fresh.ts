import { defineLayout } from "$fresh/server.ts";
import { FreshContext } from "$fresh/server.ts";

export const defineAsynchronousLayout = (defineLayout as typeof defineLayout);

export type APIRequestContext<T,W> =  (FreshContext<T,W>)

import { defineRoute as defineFreshRoute } from "$fresh/server.ts";
