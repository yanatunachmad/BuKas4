import React from 'react';
import {Text, View, Image, TextInput,TouchableHighlight} from 'react-native';
import styles from './Styles';

const LoginScreen = ({navigation}) => {
    return(
        <View style={styles.containerLoginScreen}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textloginscreen}>BuKas</Text>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginLeft: 30,marginBottom: 10}}>Email Address</Text>
                <TextInput style={styles.InputEmail} placeholder = "ex: muhnurkhalizz@gmail.com" />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginLeft: 30,marginBottom: 10, marginTop: 15}}>Password</Text>
                <TextInput style={styles.InputEmail} placeholder = "***********" />
            </View>
            <View style={styles.daftarlogin}>
                <Text onPress = {()=> navigation.navigate('RegistrationScreen')} style={{color: '#000000', fontSize: 18}}>Belum Memiliki Akun ? Daftar</Text>
            </View>
            <View style={styles.buttonbottom}>
                <TouchableHighlight style={styles.submit} onPress = {() => navigation.navigate('SplashScreen')}>
                    <Text style={styles.submitButton}>Masuk</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default LoginScreen;