/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

import {App} from './App';
import {SettingsScreen} from './App';
import {ThirdScreen} from './App';
import {Overlay} from './overlay';
import {Modal} from './modal';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Third', () => ThirdScreen);
Navigation.registerComponent('Overlay', () => Overlay);
Navigation.registerComponent('Modal', () => Modal);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    textColor: 'black',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'App',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Third',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
