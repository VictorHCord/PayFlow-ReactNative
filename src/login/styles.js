import styled, { css } from 'styled-components/native';
import { ImageBackground, TouchableOpacity } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background: #FFC480;
  flex-direction: column;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: rgba(255, 254, 253, 0.43);
  width: 80%;
  height: 60px;
  margin-bottom: 60px;
  align-items: center;
  justify-content: center;
`;
