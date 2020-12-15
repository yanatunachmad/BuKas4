import React, {useState} from 'react';
import {Text, View,FlatList,SafeAreaView,Image, ScrollView, TextInput,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

const DATA = [
  {
    id: '1',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '2',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '3',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '4',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '5',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
];
const DATAPROFIL = [
  {
    id: '1',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '2',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  },
  {
    id: '3',
    title: 'BUMI MANUSIA',
    post: 'Achmad Yanatun',
    kategori: 'Novel',
    karya: 'Pramoedya Ananta'
  }
];

const Item = ({title, post, kategori, karya}) => {
  const navigation = useNavigation();
  return(  
  <View style={{flexDirection: 'row'}}>
    <Image 
      style={{margin: 15}} 
      source={require('../assetimage/book.png')}/>
    <View style={{flexDirection: 'column'}}>
      <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      <Text style={styles.title}>Post : {post}</Text>
      <Text style={styles.title}>Kategori : {kategori}</Text>
      <Text style={styles.title}>Karya : {karya}</Text>
      <View style={styles.statusbukas}>
        <Text style={{color: '#fff'}}>Hibah</Text>
      </View>
      <View style={styles.ambilbukas}>
        <Text 
          style={{color: '#fff', fontSize: 15}}
          onPress = {()=> navigation.navigate('DetailsScreen')}
          >Ambil</Text>
      </View>
    </View>
  </View>
);
}

const DashboardScreen = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.containerDashboard}>
      <View style={styles.headerDashboard}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textHeaderName}>{'Muh Nurkhaliz'}</Text>
          <View style={{width: '55%', flexDirection: 'row-reverse'}}>
            <Image 
              style={{marginTop: 15, width: 60, height: 60}} 
              source={require('../assetimage/profiluser.png')}/>
          </View>          
        </View>        
        <Text style={styles.textQuestion}>{'Mau Buku Apa'} {"\n"}{'Hari ini ?'}</Text>
        <View style={{flexDirection: 'row', width: '100%',marginLeft: 15, marginTop: 10}}>
          <Image style={styles.imagelocation} source={require('../assetimage/locdahsboard.png')}/>
          <View style={{width: '30%', marginLeft: 10}}>
          <DropDownPicker
            dropDownStyle={{backgroundColor: '#fff', height: 37}}
            items={[
              {label: 'Bandung', value: 'Bandung'},
              {label: 'Jakarta', value: 'Jakarta'},
              {label: 'Yogyakarta', value: 'Yogyakarta'},
              ]}
            defaultIndex={0}
            containerStyle={{height: 40}}
            placeholder="Location"
            onChangeItem={item => console.log(item.label, item.value)}
          />
          </View>
          <Image style={styles.imagekategori} source={require('../assetimage/list.png')}/>
          <View style={{width: '30%', marginLeft: 10}}>
          <DropDownPicker
            dropDownStyle={{backgroundColor: '#fff', height: 37}}
            items={[
              {label: 'Hibah', value: 'Hibah'},
              {label: 'Tukar', value: 'Tukar'},
              {label: 'Jual', value: 'Jual'},
              ]}
            defaultIndex={0}
            containerStyle={{height: 40}}
            placeholder="Kategori"
            onChangeItem={item => console.log(item.label, item.value)}
          />
          </View>
        </View>
      </View>
      <View style={styles.flatdatabuku}>        
          <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 15, marginBottom: 5}}>Post Terbaru</Text>  
          <ScrollView>    
            <SafeAreaView>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => 
                    <Item 
                      title={item.title}
                      post={item.post}
                      kategori = {item.kategori} 
                      karya = {item.karya} />
                  }
                />
              </SafeAreaView>
          </ScrollView>    
        </View>  
    </View>
    );
}


const BuKasScreen = ()=>{
  return (
    <View style={styles.containerDashboard}>
      <View style={styles.headerBuKas}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textHeaderName}>{'Muh Nurkhaliz'}</Text>
          <View style={{width: '55%', flexDirection: 'row-reverse'}}>
            <Image 
              style={{marginTop: 15, width: 60, height: 60}} 
              source={require('../assetimage/profiluser.png')}/>
          </View>          
        </View>    
      </View>
      <View style={styles.inputBuku}>
        <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 15, marginBottom: 5}}>Tambah Buku</Text>     
        <View style={styles.columntambahbuku}> 
          <Text>Judul Buku</Text>
          <TextInput 
            style={styles.InputEmail} 
            secureTextEntry={true}
            placeholder= {'Ex: Bumi Manusia'}
            placeholderTextColor = "#01C5C4"
            />
        </View>
        <View style={styles.rowtambahbukus}>
          <View style={styles.columntambahbukus}> 
            <Text>Lokasi</Text>
            <DropDownPicker
              dropDownStyle={{backgroundColor: '#fff'}}
              items={[
              {label: 'Bandung', value: 'Bandung'},
              {label: 'Jakarta', value: 'Jakarta'},
              {label: 'Yogyakarta', value: 'Yogyakarta'},
              ]}
              defaultIndex={0}
              containerStyle={{height: 40}}
              placeholder="Silahkan Pilih Daerah"
              onChangeItem={item => console.log(item.label, item.value)}
              />
            <Text style={{marginTop: 10}}>Kategori Buku</Text>
            <DropDownPicker
              dropDownStyle={{backgroundColor: '#fff'}}
              items={[
              {label: 'Hibah', value: 'Hibah'},
              {label: 'Tukar', value: 'Tukar'},
              {label: 'Jual', value: 'Jual'},
              ]}
              defaultIndex={0}
              containerStyle={{height: 40}}
              placeholder="Silahkan Pilih Kategori"
              onChangeItem={item => console.log(item.label, item.value)}
              />
          </View>  
          <View style={{justifyContent: 'center',width: '89%',flexDirection: 'row-reverse',marginTop: 15}}>
            <Image 
              source={require('../assetimage/upload.png')}/>
          </View> 
        </View>
             
        <View style={styles.columntambahbuku}> 
          <Text>Karya Buku</Text>
          <TextInput 
            style={styles.InputEmail} 
            placeholder= {'Ex: Ananta Pramoedya'}
            placeholderTextColor = "#01C5C4"
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Alamat</Text>
          <TextInput 
            style={styles.InputEmail} 
            placeholder= {'Ex: Jln. Telekomunikasi'}
            placeholderTextColor = "#01C5C4"
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Tukar Buku Dengan</Text>
          <TextInput 
            style={styles.InputEmail} 
            placeholder= {'Ex: React Native Prog.'}
            placeholderTextColor = "#01C5C4"
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Harga Jual Buku</Text>
          <TextInput 
            style={styles.InputEmail}
            placeholder= {'Ex: 12.0000'}
            placeholderTextColor = "#01C5C4" 
            />
        </View>
        <View style={styles.buttonbottomsavebuku}>
          <TouchableHighlight 
            underlayColor="#01C5C4"
            onPress={()=> Alert.alert('Save Buku Berhasil')}>
            <Text style={styles.submitButton}>Post Buku</Text>
            </TouchableHighlight>
        </View>
        </ScrollView>     
      </View>  
       
    </View>
  );
}
const ChatScreen = () => {
  return(
    <View>
      <Text>Chat Screen</Text>
    </View>
  )
}

const ProfilScreen = ()=>{
    return (
      <View style={styles.containerDashboard}>
        <View style={styles.headerProfil}></View>
        <View style={{alignItems: 'center'}}>          
          <Image 
            style={{marginTop: 50}} 
            source={require('../assetimage/profiluser.png')}/>
            <Text style={styles.textProfileName}>Muh Nurkhaliz</Text>
          <View style={{backgroundColor: '#01C5C4', marginTop: 20,marginBottom: 10, justifyContent: 'center', padding: 10, borderRadius: 10}}>
            <TouchableHighlight underlayColor="#01C5C4" onPress={()=> Alert.alert('Ubah Foto')}>
              <Text style={styles.submitButton}>Ubah Foto Profil</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{backgroundColor: '#D0E8F2', height: '100%', borderRadius: 30,borderColor: '#000000',
        borderWidth: 1}}>
          <View style={styles.daftarbuku}>
            <Text style={{marginLeft: 15, fontSize: 20, color: '#000000'}}>Daftar Buku Anda</Text>  
            <ScrollView style={{width: '100%'}}> 
            <SafeAreaView>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => 
                    <Item 
                      title={item.title}
                      post={item.post}
                      kategori = {item.kategori} 
                      karya = {item.karya} />
                  }
                />
              </SafeAreaView>
              </ScrollView> 
          </View>    
        </View>  
      </View>
      
    );
  }




  export{DashboardScreen, BuKasScreen,ChatScreen, ProfilScreen}