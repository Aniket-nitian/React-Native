/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import StackDemo from './components/Navigation/stack/StackDemo';
import DrawerNav from './components/Navigation/Drawer/DrawerNav.js';

AppRegistry.registerComponent(appName, () => DrawerNav);
