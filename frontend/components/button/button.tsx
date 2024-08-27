import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    variant?: 'solid' | 'outline';
    style?: ViewStyle;
    textStyle?: TextStyle;
}

interface StyledButtonProps {
    variant: 'solid' | 'outline';
    bgColor: string;
    borderColor: string;
}

interface ButtonTextProps {
    textColor: string;
}

const StyledButton = styled(TouchableOpacity) <StyledButtonProps>`
  background-color: ${(props: { variant: string; bgColor: any; }) => (props.variant === 'outline' ? 'transparent' : props.bgColor)};
  border: ${(props: { variant: string; borderColor: any; }) => (props.variant === 'outline' ? `2px solid ${props.borderColor}` : 'none')};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text) <ButtonTextProps>`
  color: ${(props: { textColor: any; }) => props.textColor};
  font-size: 16px;
  font-weight: bold;
`;

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'solid', style, textStyle }) => {
    const bgColor = variant === 'solid' ? '#30C2E3' : 'white';
    const textColor = variant === 'solid' ? 'white' : '#30C2E3';
    const borderColor = '#30C2E3';

    return (
        <StyledButton
            onPress={onPress}
            variant={variant}
            bgColor={bgColor}
            borderColor={borderColor}
            style={style}
        >
            <ButtonText textColor={textColor} style={textStyle}>
                {title}
            </ButtonText>
        </StyledButton>
    );
};

export default Button;