import type { JSX } from 'react';
import { PASSWD_LINES } from '../../consts/passwd.const';

/** The fake /etc/passwd, shown as a file listing. */
function PasswdFile(): JSX.Element {
  return (
    <pre className="overflow-x-auto font-mono text-sm">
      {PASSWD_LINES.join('\n')}
    </pre>
  );
}

export default PasswdFile;
