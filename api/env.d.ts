/**
 * Minimal ambient declaration for the environment variables the function reads.
 *
 * Deliberately not `@types/node`: this runs on the Edge runtime, where almost
 * nothing from Node exists. Pulling in the full Node typings would tell the
 * compiler that fs, Buffer and the rest are available here, and the first
 * person to use one would find out at runtime instead of at build time.
 *
 * Only `process.env` is real on Edge, and only these keys are read.
 */
declare const process: {
  env: {
    RESEND_API_KEY?: string;
    CONTACT_TO?: string;
    CONTACT_FROM?: string;
  };
};
