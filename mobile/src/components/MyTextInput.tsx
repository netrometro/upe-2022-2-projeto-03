import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
<<<<<<< HEAD

export function MyTextInput(props: TextInputProps) {
  const {colors} = useTheme();
  return (
    <TextInput
      placeholderTextColor="#727272"
      style={[
        styles.input,
        {borderColor: colors.primary, color: colors.onBackground},
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16,
  },
});
=======
import styled from 'styled-components/native';

const Input = styled.TextInput`
    borderRadius: 8;
    paddingHorizontal: 8;
    borderWidth: 1;
    width: 70%;
    height: 50;
    marginBottom: 16;
    margin-top: 16;
`

export function MyTextInput(props: TextInputProps) {
  const any = useTheme();
  console.log(any);
  return (
    <Input
      placeholderTextColor="#727272"
      {...props}
    />
  );
}
>>>>>>> 391c35a2d5dc858f00a04f203033967ef64fc4fe
