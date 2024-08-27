import React from 'react';
import { TextInput, ViewStyle, TextStyle } from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    style?: ViewStyle;
    inputStyle?: TextStyle;
}

const StyledInput = styled(TextInput)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, style, inputStyle }) => {
    return (
        <StyledInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[style, inputStyle]}
        />
    );
};

export default Input;