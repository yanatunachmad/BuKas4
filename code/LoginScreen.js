import React, {useState} from 'react';
import {Text, View, Image, TextInput,TouchableHighlight, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

// const firebaseConfig = {
//     apiKey: "AIzaSyCcBqT_E73rPoFWSwtmMXe9IjHSuPNPdsA",
//     authDomain: "bukas-528ac.firebaseapp.com",
//     databaseURL: "https://bukas-528ac-default-rtdb.firebaseio.com/",
//     projectId: "bukas-528ac",
//     storageBucket: "bukas-528ac.appspot.com",
//     messagingSenderId: "1095927580986",
//     appId: "1:1095927580986:web:4630bffc963a4054da6803",
//     measurementId: "G-EQSB7BGTVX"
//   };
//   if(!firebase.apps.length)
//   {
//     firebase.initializeApp(firebaseConfig);
//   }

const LoginScreen = () => {
{
    const navigation = useNavigation();
    const [state, setstate] = React.useState({emailaddress: '', passwordaddress: ''});
    const [user, setUser] = React.useState('');
    // const signIn = () => {
    //     auth()
    //     .signInWithEmailAndPassword(state.emailaddress, state.passwordaddress)
    //     .then(() => {
    //       Alert.alert('Selamat Datang')
    //       navigation.navigate('ButtomTabBuKas');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/user-not-found') {
    //         Alert.alert('Email Tidak Terdaftar')        
            
    //       }
    //       if (error.code === 'auth/invalid-email') {
    //         Alert.alert('Alamat Email Salah')
    //       }
    //       console.error(error);
    //       if (error.code === 'auth/wrong-password') {
    //         Alert.alert('Password Salah')
    //       }
    //       console.error(error);
    //     });
    // }
    // const onAuthStateChanged= user =>{
    //     setUser(user);
    // }
    React.useEffect(()=>{
        LogBox.ignoreAllLogs();
        // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        // return subscriber;
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <Image style={styles.logologinscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textloginscreen}>BuKas</Text>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10}}>Email Address</Text>
                <TextInput 
                    style={styles.InputEmail} 
                    placeholder = "ex: muhnurkhalizz@gmail.com"
                    placeholderTextColor = "#01C5C4"
                    />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15}}>Password</Text>
                <TextInput 
                    style={styles.InputEmail} 
                    placeholder = "***********" 
                    placeholderTextColor = "#01C5C4"
                    secureTextEntry={true}
                    />
            </View>
            <View style={styles.daftarlogin}>
                <Text onPress = {()=> navigation.navigate('RegistrationScreen')} style={{color: '#000000', fontSize: 18}}>Belum Memiliki Akun ? Daftar</Text>
            </View>
            <View style={styles.buttonbottom}>
                <TouchableHighlight 
                    underlayColor="#01C5C4"                    
                    onPress = {()=> navigation.navigate('ButtomTabBuKas')}
                    > 
                    <Text 
                        style={styles.submitButton}>Masuk</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
}

export default LoginScreen;