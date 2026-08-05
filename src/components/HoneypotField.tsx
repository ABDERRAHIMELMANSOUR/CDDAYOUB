import { HONEYPOT_NAME } from '../lib/crm';

/**
 * A field no human ever fills in.
 *
 * Hidden from the screen AND from assistive technology (`aria-hidden`,
 * `tabIndex={-1}`), so a screen-reader user never encounters it. Bots that
 * fill every input give themselves away. `autoComplete="off"` keeps browsers
 * from helpfully populating it and locking a real visitor out.
 *
 * Deliberately not `type="hidden"` — bots skip those.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
      <label htmlFor={HONEYPOT_NAME}>Leave this field empty</label>
      <input
        id={HONEYPOT_NAME}
        name={HONEYPOT_NAME}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
