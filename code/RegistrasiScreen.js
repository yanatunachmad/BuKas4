import React from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert} from 'react-native';
import styles from './Styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const RegistrationScreen = ({navigation}) => {
    const [state, setstate] = React.useState({emailaddress: '', passwordaddress: ''});
    const [username, setUsername] = React.useState('');
    const [user, setUser] = React.useState('');
    const signUp = () => {
        auth()
        .createUserWithEmailAndPassword(state.emailaddress, state.passwordaddress)
        .then(() => {
          Alert.alert('Berhasil Membuat Akun')
          navigation.navigate('LoginScreen');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email Sudah Terdaftar')
            
          }
      
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Alamat Email Salah')
          }
        });
    }
    const onAuthStateChanged= user =>{
        setUser(user);
    }
    React.useEffect(()=>{
        
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
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
                value={state.emailaddress}
                onChangeText={text => setstate({...state, emailaddress: text})}/>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15}}>Password</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "***********" 
                secureTextEntry={true} 
                value={state.passwordaddress}
                onChangeText={text => setstate({...state, passwordaddress: text})}/>
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginBottom: 10, marginTop: 15}}>Nama Panggilan</Text>
                <TextInput 
                style={styles.InputEmail} 
                placeholder = "Muh Nurkhaliz" />
            </View>
            <View style={styles.buttonbottomregist}>
                <TouchableHighlight 
                    underlayColor="#AE4E4E"
                    onPress={signUp}>
                    <Text style={styles.submitButton}>Submit</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default RegistrationScreen;