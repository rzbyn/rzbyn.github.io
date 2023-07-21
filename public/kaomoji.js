/**
 * Random kaomoji picker!
 *
 * Inspired by simple script from https://git-scm.com
 * to randomly picks tagline.
 */

const kaomojis = ['(╯°□°)╯┻━┻', '٩(◕‿◕｡)۶', 'ヾ( ￣O￣)ツ', '(⇀‸↼‶)', 'ヽ(°〇°)ﾉ', '(´ ∀ ` *)'];
const kaomoji = kaomojis[Math.floor(Math.random() * kaomojis.length)];

document.getElementById('kaomoji').innerHTML = kaomoji;

