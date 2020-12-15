import React, {useState} from 'react';
import {Text, View, Image, TextInput, Button, TouchableHighlight, SafeAreaView, ScrollView, Alert, LogBox} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';


const DetailsScreen = () => {
    return(
            <View style={styles.containerDashboard}>
                <View style={styles.headerDashboard}>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <Text style={styles.textHeaderName}>{'Muh Nurkhaliz'}</Text>
                    <View style={{width: '55%', flexDirection: 'row-reverse'}}>
                    <Image 
                        style={{marginTop: 15, width: 60, height: 60,}} 
                        source={require('../assetimage/profiluser.png')}/>
                    </View>          
                </View>
                <View style={{alignItems: 'center', marginBottom: 20}}>          
                    <Image 
                        style={{marginTop: 50}} 
                        source={require('../assetimage/book.png')}/>
                </View>
                <View style={styles.DetailsBuku}>
                    <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 25}}>BUMI MANUSIA</Text>
                    <Text style={{marginTop: 10, fontSize: 18}}>Post : Muh Nurkhaliz</Text>
                    <Text style={{marginTop: 10, fontSize: 18}}>Kategori : Novel</Text>
                    <Text style={{marginTop: 10, fontSize: 18}}>Karya : Pramoedya Ananta</Text>
                </View>
                </View>
            </View>
    );
}

export default DetailsScreen;