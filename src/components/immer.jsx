const array = ["abil", "fabil", "chabil", "nabil"];
import { produce } from "immer";

const nextState = produce(array, (draft) => {
  draft.push("anoato");
});
console.log(nextState);
