'use strict'

/* \u000B = [] - Line Tabulation (\v) - <VT> */ // ❌ `no-irregular-whitespace`
/* \u000C = [] - Form Feed (\f) - <FF> */ // ❌ `no-irregular-whitespace`
/* \u00A0 = [ ] - No-Break Space - <NBSP> */ // ❌ `no-irregular-whitespace`
/* \u0085 = [] - Next Line */ // ❌ `no-irregular-whitespace`
/* \u1680 = [ ] - Ogham Space Mark */ // ❌ `no-irregular-whitespace`
/* \u180E = [᠎] - Mongolian Vowel Separator - <MVS> */ // ❌ `no-irregular-whitespace`
/* \u2000 = [ ] - En Quad */ // ❌ `no-irregular-whitespace`
/* \u2001 = [ ] - Em Quad */ // ❌ `no-irregular-whitespace`
/* \u2002 = [ ] - En Space - <ENSP> */ // ❌ `no-irregular-whitespace`
/* \u2003 = [ ] - Em Space - <EMSP> */ // ❌ `no-irregular-whitespace`
/* \u2004 = [ ] - Three-Per-Em Space */ // ❌ `no-irregular-whitespace`
/* \u2005 = [ ] - Four-Per-Em Space */ // ❌ `no-irregular-whitespace`
/* \u2006 = [ ] - Six-Per-Em Space */ // ❌ `no-irregular-whitespace`
/* \u2007 = [ ] - Figure Space */ // ❌ `no-irregular-whitespace`
/* \u2008 = [ ] - Punctuation Space - <PUNCSP> */ // ❌ `no-irregular-whitespace`
/* \u2009 = [ ] - Thin Space */ // ❌ `no-irregular-whitespace`
/* \u200A = [ ] - Hair Space */ // ❌ `no-irregular-whitespace`
/* \u200B = [​] - Zero Width Space - <ZWSP> */ // ❌ `no-irregular-whitespace`

/* \u202F = [ ] - Narrow No-Break Space */ // ❌ `no-irregular-whitespace`
/* \u205f = [ ] - Medium Mathematical Space */ // ❌ `no-irregular-whitespace`
/* \u3000 = [　] - Ideographic Space */ // ❌ `no-irregular-whitespace`

const strings = [
  '\u000B = [] - Line Tabulation (\v) - <VT>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u000C = [] - Form Feed (\f) - <FF>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u00A0 = [ ] - No-Break Space - <NBSP>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u0085 = [] - Next Line', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u1680 = [ ] - Ogham Space Mark', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u180E = [᠎] - Mongolian Vowel Separator - <MVS>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2000 = [ ] - En Quad', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2001 = [ ] - Em Quad', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2002 = [ ] - En Space - <ENSP>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2003 = [ ] - Em Space - <EMSP>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2004 = [ ] - Three-Per-Em Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2005 = [ ] - Four-Per-Em Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2006 = [ ] - Six-Per-Em Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2007 = [ ] - Figure Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2008 = [ ] - Punctuation Space - <PUNCSP>', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u2009 = [ ] - Thin Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u200A = [ ] - Hair Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u200B = [​] - Zero Width Space - <ZWSP>', // ❌ skipStrings:false of `no-irregular-whitespace`

  '\u202F = [ ] - Narrow No-Break Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u205f = [ ] - Medium Mathematical Space', // ❌ skipStrings:false of `no-irregular-whitespace`
  '\u3000 = [　] - Ideographic Space', // ❌ skipStrings:false of `no-irregular-whitespace`
]

const regExps = [
  // eslint-disable-next-line no-control-regex
  /\u000B = [] - Line Tabulation (\v) - <VT>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  // eslint-disable-next-line no-control-regex
  /\u000C = [] - Form Feed (\f) - <FF>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u00A0 = [ ] - No-Break Space - <NBSP>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u0085 = [] - Next Line/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u1680 = [ ] - Ogham Space Mark/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u180E = [᠎] - Mongolian Vowel Separator - <MVS>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2000 = [ ] - En Quad/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2001 = [ ] - Em Quad/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2002 = [ ] - En Space - <ENSP>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2003 = [ ] - Em Space - <EMSP>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2004 = [ ] - Three-Per-Em Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2005 = [ ] - Four-Per-Em Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2006 = [ ] - Six-Per-Em Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2007 = [ ] - Figure Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2008 = [ ] - Punctuation Space - <PUNCSP>/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u2009 = [ ] - Thin Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u200A = [ ] - Hair Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u200B = [​] - Zero Width Space - <ZWSP>/u, // ❌ skipStrings:false of `no-irregular-whitespace`

  /\u202F = [ ] - Narrow No-Break Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u205f = [ ] - Medium Mathematical Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
  /\u3000 = [　] - Ideographic Space/u, // ❌ skipStrings:false of `no-irregular-whitespace`
]

export default {
  strings,
  regExps,
}

/*
 * FIXME: Can not write linted code with string and RegExp for the following characters.
 *   - Line Separator (\u2028)
 *   - Paragraph Separator (\u2029)
 */

// ❌ `no-irregular-whitespace`
// Line Separator (\u2028)
// eslint-disable-next-line @stylistic/linebreak-style
/* 
*/

// ❌ `no-irregular-whitespace`
// Paragraph Separator (\u2029)
// eslint-disable-next-line @stylistic/linebreak-style
/* 
*/
