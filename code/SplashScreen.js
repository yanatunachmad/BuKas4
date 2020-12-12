import React, { useEffect } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('OnBoardingSatu');
        }, 5000)
    }, [navigation]);
    return(
        <View style={styles.container}>
            <TouchableOpacity>  
                <Image style={styles.logosplashscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textsplashscreen}>BuKas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SplashScreen;