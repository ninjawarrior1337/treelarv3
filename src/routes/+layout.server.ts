import { trpc } from "../trpc";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
  return {
    // Deliberately not awaited: the page renders immediately and SvelteKit
    // streams this promise to the browser — as an appended SSR HTML chunk on
    // initial load, and as extra lines on the __data.json response during
    // client-side navigation. Consumers use {#await data.birthday}.
    // Errors resolve to null so an unavailable API only hides the banner
    // instead of failing the whole page.
    birthday: trpc.tokubetsu.birthdayToday.query().catch(() => null),
  };
};
