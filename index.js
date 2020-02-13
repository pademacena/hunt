/**
 * @format
 */

import {AppRegistry, YellowBox, StatusBar} from 'react-native';
import App from './src';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);

YellowBox.ignoreWarnings([
    'Warning: componentWillReceiveProps has been',
]);

StatusBar.setBackgroundColor('#DA552F');
StatusBar.setBarStyle("light-content");