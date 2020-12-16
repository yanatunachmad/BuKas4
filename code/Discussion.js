import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button , TouchableHighlight, TouchableOpacity} from 'react-native'
import styles from './Styles';

const Discussion = () => {
    return (
        <ImageBackground
        source={require('../assetimage/bg.png')} style={styles.containerDashboard}>
            <View style={styles.headerChat}>
                <Text style={{ fontSize:30, paddingLeft:20, paddingVertical:5 }} >Cindy</Text>
                <Image source={require('../assetimage/bg.png')} style={{ width:20, height:20, marginVertical:15, marginHorizontal:10}}/>
            </View>
            <View style={{ alignItems: 'center' }}>

            </View>
            <View style={{  height: '80%', borderRadius: 30, borderColor: '#000000',  marginHorizontal: 20, }}>
            
                <View style={{ height: 40 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.Pesanmasuk}>Kamu Udah Eek?</Text>                    
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.Pesankirim}>Kamu Udah Eek?</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={styles.Pesankirim}>Kalau kamu?</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.Pesanmasuk}>Aku udah barusan</Text>                    
                </View>
            
            </View>
            <View style={{ height: '0.5%' }} />
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>
            
                <TextInput
                    style={styles.inputPesan}
                    placeholder="Masukan Pesan"
                    placeholderTextColor="grey"
                />
                
                  <View style={styles.buttonchat}>
                  <TouchableOpacity >        
                        <TouchableHighlight underlayColor="#01C5C4" >
                        <Image source={require('../assetimage/arr.png')} style={{ width:20, height:20, marginVertical:10, marginHorizontal:10}}/>
                        </TouchableHighlight>
                        </TouchableOpacity>    
                    </View>
                    
            </View>
        </ImageBackground >

    );

}

export default Discussion


