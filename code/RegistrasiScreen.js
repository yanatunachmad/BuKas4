import React, {useState} from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';


const RegistrationScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    // const signUp = () => {
    //     auth()
    //     .createUserWithEmailAndPassword(state.emailaddress, state.passwordaddress)
    //     .then(() => {
    //       Alert.alert('Berhasil Membuat Akun')
    //       navigation.navigate('LoginScreen');
    //     })
    //     .catch(error => {
    //       if (error.code === 'auth/email-already-in-use') {
    //         Alert.alert('Email Sudah Terdaftar')
            
    //       }
      
    //       if (error.code === 'auth/invalid-email') {
    //         Alert.alert('Alamat Email Salah')
    //       }
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
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15}}>Nama Panggilan</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "Muh Nurkhaliz" 
                placeholderTextColor = "#01C5C4"
                />
            </View>
            <View style={styles.buttonbottomregist}>
                <TouchableHighlight 
                    underlayColor="#01C5C4"
                    onPress = {()=> navigation.navigate('LoginScreen')}
                    >
                    <Text style={styles.submitButton}>Submit</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default RegistrationScreen;