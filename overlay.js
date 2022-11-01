import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {database} from './model/index';

export const Overlay = props => {
  const createPost = async () => {
    const newPost = await database.write(async () => {
      const post = await database.get('posts').create(post => {
        post.title = 'Post 1';
        post.body = 'Body of post 1';
        post.isPinned = true;
      });
    });
  };

  const getPost = async () => {
    const Posts = await database.get('posts').query().fetch();
    console.log('jwnd', Posts);
  };

  const updatePost = async () => {
    const post = await database.get('posts').find('lppaispzamnqrfgc');
    await database.write(async () => {
      await post.update(() => {
        post.title = 'updatedd title twice';
      });
    });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{color: 'black'}}>This is an ovrlay</Text>
      <Button
        title="close"
        onPress={() => Navigation.dismissOverlay(props.componentId)}
      />
      <Button title="Create Post" onPress={() => createPost()} />
      <Button title="Get Post" onPress={() => getPost()} />
      <Button title="Update Post" onPress={() => updatePost()} />
    </View>
  );
};
