import { trpc } from "../trpc";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "mei";

type RouterOutput = inferRouterOutputs<AppRouter>;

let birthdayToday = $state<RouterOutput["tokubetsu"]["birthdayToday"]>(null);

export const useIdolStore = () => {
  $effect(() => {
    if(!birthdayToday) {
      trpc.tokubetsu.birthdayToday.query().then((v) => (birthdayToday = v));
    }
  });

  return {
    get data() {
      return birthdayToday;
    },
  };
};
