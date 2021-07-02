import { StatusBar } from 'expo-status-bar';
import { Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useFonts, Inter_200ExtraLight, Inter_100Thin  } from '@expo-google-fonts/inter';
import { SafeArea, BackgroundImage, Button, Container, Content } from './styles';
import AppLoading from 'expo-app-loading';

const login = ({ navigation }) => {

  let [fontsLoaded, error] = useFonts({
    Inter_200ExtraLight,
    Inter_100Thin
  });

  if (!fontsLoaded) return <AppLoading />
  const Login = () => {}
  return (
    <SafeArea>
      <StatusBar style="light" />
      <BackgroundImage source={require('../../assets/images/login.png')} resizeMode={'cover'} resizeMethod={'resize'}>
        <Content>
        <Text style={styles.title}> Tenha suas contas em um so lugar </Text>
        </Content>
        <Button onPress={Login}>
          <Container>
            <Image source={require('../../assets/images/google-icon.png')} resizeMode={'contain'} resizeMethod={'resize'} />
            <Text style={styles.textGoogle}>Entrar com Google</Text>
          </Container>
        </Button>
      </BackgroundImage>
    </SafeArea>
  );
}

export default login;

const styles = StyleSheet.create({
  title: { fontFamily: 'Inter_200ExtraLight', color: '#fff', fontWeight: 'bold', fontSize: 36, textAlign: 'center' },
  textGoogle: { fontFamily: 'Inter_100Thin', color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20 ,  textAlign: 'center'}
})