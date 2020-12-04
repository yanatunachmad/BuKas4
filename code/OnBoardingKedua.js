import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './Styles';

const OnBoardingKedua = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.logosplashscreen} source={require('../assetimage/transaction.png')}/>
            <Text style={styles.textonboarding}>Transaksi Buku</Text>
            <Text style={styles.textonboardingdesc}>Jual, Tukar, dan Hibah kan</Text>
            <Text style={styles.textonboardingdesc}>Buku kalian di BuKas</Text>
            <View style={styles.buttonbottom}>
                <TouchableHighlight underlayColor="#AE4E4E" onPress = {() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.submitButton}>Lanjutkan</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default OnBoardingKedua;