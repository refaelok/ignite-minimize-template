import ReactNative, {
    UIManager,
    Platform
} from 'react-native';
import DebugConfig from './DebugConfig';
import AppConfig from './AppConfig';


if (__DEV__) {
    console.disableYellowBox = !DebugConfig.yellowBox;
}

ReactNative.I18nManager.allowRTL(AppConfig.allowRTL);

if (Platform.OS === 'android' && AppConfig.allowLayoutAnimationOnAndroid) {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}
