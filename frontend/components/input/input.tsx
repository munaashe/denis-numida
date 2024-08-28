import React from 'react';
import { Text } from 'react-native';
import { TextInput, ViewStyle, TextStyle, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
    title: string;
    placeholder?: string;
    value: string | number;
    onChange: (text: string) => void; // Updated type
    style?: ViewStyle;
    inputStyle?: TextStyle;
}

const StyledInput = styled(TextInput)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  height: 56px;
`;

const StyledTitle = styled(Text)`
  font-size: 16px;
  line-height: 19.36px;
  font-weight: 500;
  padding-bottom: 8px;
`;

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChange,
    style,
    inputStyle,
    title
}) => {
    return (
        <View style={styles.container}>
            <StyledTitle>{title}</StyledTitle>
            <StyledInput
                placeholder={placeholder}
                value={String(value)}
                onChangeText={onChange}
                style={[style, inputStyle]}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});