declare module "decoder" {

    export interface DecoderResult {
        // Define the structure for the decoded result object
        // Adjust the types according to the actual implementation
        // Example properties:
        valid: boolean;
        // ...
    }

    export class Decoder {
      // Define the Decoder class
      constructor(messages: string[], safeMode?: boolean);
      decodeNmea(input: string[]): void;
      decodeAIVDM(input: string[], session: any): void;
      validateRawMessage(input: any): boolean;
      getResults(): DecoderResult[];
    }

    export function parseGPRMC(input: string[]): DecoderResult;
    export function parseGPGGA(input: string[]): DecoderResult;
    // Export other parser functions and types used in the Decoder class if necessary
}
