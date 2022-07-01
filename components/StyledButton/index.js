import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = props => {
  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;
  const BackgroundColor = type === 'primary' ? '#171A2BCC' : '#FFFFFFA6';
  const TextColor = type === 'primary' ? '#FFFFFF' : '#171A28';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: BackgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.text, {color: TextColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
