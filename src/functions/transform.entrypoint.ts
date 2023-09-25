// -----------------------------------------------------------------------------
// Purpose: Transform entrypoint
// this is the entrypoint that will be called when the transformer is invoked
// to transform an event, the return value of this function will be passed to
// the read model adapter.
// -----------------------------------------------------------------------------
import * as console from "console";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Decoder } from "ais-decoder-ts";



interface Input<T = any> {
  eventId: string;
  validTime: string;
  payload: T;
}

export default async function (input: Input) {
  console.info(`Received event ${input.eventId}, with payload ${JSON.stringify(input.payload)} and valid time ${input.validTime}`);
  const payloadData = input.payload.data || "";
  //Base64 decode the payload
  const decodedPayload = Buffer.from(payloadData, "base64").toString("utf-8");
  console.log(decodedPayload);
  const safeMode = false;
  const aisDecoder_ex2 = new Decoder([decodedPayload], safeMode);
  const results = aisDecoder_ex2.getResults();
  console.log(results);

  return {
    ais: decodedPayload,
    "ais-decoded": results.shift(),
    eventId: input.eventId,
    validTime: input.validTime

  };
}
