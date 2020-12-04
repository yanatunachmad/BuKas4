import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

const SplashScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('OnBoardingSatu')}>  
                <Image style={styles.logosplashscreen} source={require('../assetimage/books.png')}/>
                <Text style={styles.textsplashscreen}>BuKas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SplashScreen;