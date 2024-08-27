import React from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Button from '../button';


interface LoanCardProps {
  title: string;
  amount: string;
  interest: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  amountStyle?: TextStyle;
  statusStyle?: TextStyle;
  onClick: () => void;
}

const Card = styled(View)`
  background-color: white;
  border-radius: 10px;
  border-color: #D9D9D9;
  border-width: 1px;
  padding: 20px;
  margin-bottom: 20px;
  elevation: 3;
`;

const CardTitle = styled(Text)`
  font-size: 20px;
  line-height: 23.44px;
  font-weight: bold;
  color: #333;
`;

const CardText = styled(Text)`
  padding-top: 24px;
  font-size: 10px;
  line-height: 12.1px; 
`;

const InterestText = styled(Text)`
  font-size: 10px;
  line-height: 12.1px; 
  font-weight: bold;
`;

const CardAmount = styled(Text)`
  font-size: 24px;
  line-height: 29.05px;
  font-weight: bold;
  color: #30C2E3;
`;

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LoanCard: React.FC<LoanCardProps> = ({
  title,
  amount,
  interest,
  style,
  titleStyle,
  amountStyle,
  onClick = () => { }
}) => {
  return (
    <Card style={style}>
      <CardTitle style={titleStyle}>{title}</CardTitle>
      <CardText>Maximum Amount</CardText>
      <CardAmount style={amountStyle}>{amount}</CardAmount>
      <ButtonContainer>
        <InterestText>{interest}</InterestText>
        <Button
          title="Learn More   →"
          onPress={onClick}
          variant='outline'
          style={styles.buttonStyle}
          textStyle={styles.buttonText}
        />
      </ButtonContainer>
    </Card>
  );
};

export default LoanCard;

const styles = StyleSheet.create({
  buttonStyle: {
    textTransform: 'uppercase',
    height: 21,
    textAlignVertical: 'center'
  },
  buttonText: {
    fontSize: 8,
    paddingHorizontal: 10,
  }
});