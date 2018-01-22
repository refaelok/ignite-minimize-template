import ReactNative, {Text} from 'react-native';
import DebugConfig from './DebugConfig';
import AppConfig from './AppConfig';

ReactNative.I18nManager.allowRTL(false);

if (__DEV__) {
    console.disableYellowBox = !DebugConfig.yellowBox;
}
