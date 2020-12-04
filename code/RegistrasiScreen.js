import React from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView} from 'react-native';
import styles from './Styles';

const RegistrationScreen = ({navigation}) => {
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
                <TextInput style={styles.InputEmail} placeholder = "***********" secureTextEntry={true} />
            </View>
            <View style={styles.columnemaillogin}>
                <Text style={{marginLeft: 30,marginBottom: 10, marginTop: 15}}>Nama Panggilan</Text>
                <TextInput style={styles.InputEmail} placeholder = "Muh Nurkhaliz" />
            </View>
            <View style={styles.buttonbottom}>
                <TouchableHighlight underlayColor="#AE4E4E" underlayColor='#fff' >
                    <Text style={styles.submitButton}>Submit</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default RegistrationScreen;