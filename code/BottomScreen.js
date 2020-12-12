import * as React from 'react';
import {Text, View,FlatList,SafeAreaView,Image, ScrollView, TextInput,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

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

const Item = ({title, post, kategori, karya}) => (
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
          onPress={()=> Alert.alert('Ambil Buku')}>Ambil</Text>
      </View>
    </View>
  </View>
);

const iitem = ({title, post, kategori, karya}) => (
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
          onPress={()=> Alert.alert('Ambil Buku')}>Ambil</Text>
      </View>
    </View>
  </View>
);

const DashboardScreen = () => {
    const navigation = useNavigation();
    return (
    <View style={styles.containerDashboard}>
      <View style={styles.headerDashboard}>
        <Text style={styles.textHeader}>Hello,</Text>
        <Text style={styles.textHeaderName}>Muh Nurkhaliz</Text>
        <Text style={styles.textQuestion}>{'Mau Buku Apa'} {"\n"}{'Hari ini ?'}</Text>
        <View style={{flexDirection: 'row', width: '100%',marginLeft: 15}}>
          <Image style={styles.imagelocation} source={require('../assetimage/locationdashboard.png')}/>
          <Text style={styles.textlocation}>Bandung</Text>
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
        <Text style={styles.textHeader}>Hello,</Text>
        <Text style={styles.textHeaderName}>Muh Nurkhaliz</Text>
      </View>
      <View style={styles.inputBuku}>     
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10, marginLeft: 15, marginBottom: 5}}>Tambah Buku</Text>     
        <View style={styles.columntambahbuku}> 
          <Text>Judul Buku</Text>
          <TextInput 
            style={styles.InputBuku} 
            secureTextEntry={true}
            placeholder= {'Judul Buku'}
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Karya Buku</Text>
          <TextInput 
            style={styles.InputBuku} 
            placeholder= {'Karya Buku'}
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Alamat</Text>
          <TextInput 
            style={styles.InputBuku} 
            placeholder= {'Alamat'}
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Tukar Buku Dengan</Text>
          <TextInput 
            style={styles.InputBuku} 
            />
        </View>
        <View style={styles.columntambahbuku}> 
          <Text>Harga Jual Buku</Text>
          <TextInput 
            style={styles.InputBuku} 
            />
        </View>
      </View>   
    </View>
  );
}

const ProfilScreen = ()=>{
    return (
      <View style={styles.containerDashboard}>
        <View style={styles.headerProfil}></View>
        <View style={{alignItems: 'center'}}>
          <Image 
            style={{marginTop: 50}} 
            source={require('../assetimage/profiluser.png')}/>
            <Text style={styles.textProfileName}>Deny</Text>
          <View style={{backgroundColor: '#AE4E4E', marginTop: 20,marginBottom: 10, justifyContent: 'center', padding: 10, borderRadius: 10}}>
            <TouchableHighlight underlayColor="#AE4E4E">
              <Text style={styles.submitButton}>Ubah Foto Profil</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{backgroundColor: '#FEE2E2', height: '100%', borderRadius: 30}}>
  
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




  export{DashboardScreen, BuKasScreen, ProfilScreen}