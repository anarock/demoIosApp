import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

export const Overlay = props => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <Text>This is an ovrlay</Text>
    <Button
      title="close"
      onPress={() => Navigation.dismissOverlay(props.componentId)}
    />
  </View>
);
