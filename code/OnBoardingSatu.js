import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './Styles';

const OnBoardingSatu = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.logosplashscreen} source={require('../assetimage/location.png')}/>
            <Text style={styles.textonboarding}>Location Based</Text>
            <Text style={styles.textonboardingdesc}>Informasi Buku Berdasarkan Lokasi</Text>
            <Text style={styles.textonboardingdesc}>yang kamu Inginkan</Text>
            <View style={styles.buttonbottom}>
                <TouchableHighlight style={styles.submit} onPress = {() => navigation.navigate('OnBoardingKedua')}>
                    <Text style={styles.submitButton}>Lanjutkan</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default OnBoardingSatu;