import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "nodebase",
  // eventKey: process.env.INNGEST_EVENT_KEY, // Optional in dev, required in prod
});
