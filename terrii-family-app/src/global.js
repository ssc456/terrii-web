import './crypto-shim';
import { LogBox } from 'react-native';
import JSBI from 'jsbi';
if (typeof global.BigInt === 'undefined') { global.BigInt = JSBI.BigInt; }
LogBox.ignoreLogs(['Possible Unhandled Promise Rejection','Remote debugger']);
