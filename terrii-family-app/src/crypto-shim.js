import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
if (typeof global.crypto !== 'object') { global.crypto = {}; }
if (typeof global.crypto.getRandomValues !== 'function') {
  const { randomBytes } = require('react-native-randombytes');
  global.crypto.getRandomValues = (array) => { const bytes = randomBytes(array.length); array.set(bytes); return array; };
}
if (typeof global.Buffer === 'undefined') { global.Buffer = require('buffer').Buffer; }
try {
  const { BigInteger } = require('jsbn');
  global.BigInteger = BigInteger;
  if (!global.crypto.BigInteger) { global.crypto.BigInteger = BigInteger; }
} catch(e) { console.error('Failed to load BigInteger polyfill:', e); }
if (typeof global.process === 'undefined') { global.process = require('process'); }
