'use client';

import { useEffect } from 'react';
import { CONSOLE_HINT } from '../../consts/console-hint.const';

// Module scope: survives Strict Mode's double effect and client navigation,
// so the hint prints once per full page load.
let printed = false;

/** Easter egg: prints the whoami hint to the console. Renders nothing. */
function ConsoleHint(): null {
  useEffect(() => {
    if (printed) return;
    printed = true;
    console.log(CONSOLE_HINT);
  }, []);

  return null;
}

export default ConsoleHint;
