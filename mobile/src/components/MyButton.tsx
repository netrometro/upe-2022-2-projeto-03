import React from 'react';
import {Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import {ButtonContainer} from './styles';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function MyButton({title, style, ...rest}: MyButtonProps) {
  return (
    <ButtonContainer {...rest} style={[style]}>
      <Text style={styles.text}>{title}</Text>
    </ButtonContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
<<<<<<< HEAD
    color: '#FFF',
=======
    color: 'rgb(34, 91, 136)',
>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe
    fontSize: 16,
  },
});