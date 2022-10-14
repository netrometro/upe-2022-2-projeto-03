import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
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
