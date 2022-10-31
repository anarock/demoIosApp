import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export const Modal = props => (
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
  </View>
);
