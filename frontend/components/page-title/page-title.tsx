import React from 'react';
import { Text, TextStyle } from 'react-native';
import styled from 'styled-components/native';

interface PageTitleProps {
    title: string;
    style?: TextStyle;
}

const TitleText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const PageTitle: React.FC<PageTitleProps> = ({ title, style }) => {
    return <TitleText style={style}>{title}</TitleText>;
};

export default PageTitle;