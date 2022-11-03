import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

export const Modal = props => {
  const displayNotification = async () => {
    await notifee.requestPermission();

    await notifee.displayNotification({
      title: 'Nottification Title',
      body: 'Main body content of the notification',
    });
  };

  const requestPermission = async () => {
    const auth = await messaging().requestPermission();
  };

  const getFCMToken = () => {
    messaging()
      .getToken()
      .then(token => console.log(token));
  };

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    // Get the device token
    console.log('wjiwww');
    messaging().getInitialNotification(not => console.log('dwidi', not));
    const unsubscribe = messaging().onMessage(async remoteMsg => {
      console.log('jwn', remoteMsg);
    });
    return unsubscribe;
    requestUserPermission();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        flexShrink: 1,
      }}>
      <Text>This is a Modal</Text>
      <Button
        title="close"
        onPress={() => Navigation.dismissModal(props.componentId)}
      />
      <Button
        title="Display Notification"
        onPress={() => displayNotification()}
      />
    </View>
  );
};
