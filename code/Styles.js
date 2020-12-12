import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textHeader: {
        fontSize: 25,
        marginTop: 15,
        marginLeft: 15
    },
    textHeaderName: {
        fontSize: 25,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    textProfileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textQuestion: {
        fontSize: 30,
        marginLeft: 15,
        marginTop: 20
    },
    imagelocation: {
        width: 20,
        height: 20,
        marginTop: 10
    },
    statusbukas:{
        width: '40%',
        height: 20, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AEAA4E', 
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1
    },
    ambilbukas:{
        borderColor: '#000000',
        borderWidth: 1,
        width: '50%',
        marginTop: 5,
        height: 30, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AE4E4E', 
        borderRadius: 10
    },
    containerDashboard : {
        flex: 1,
        width : '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    containerProfil: {
        flex: 1,
        width : '100%',
        height: '10%',
        backgroundColor: '#fff'
    },
    flatdatabuku: {
        height :'100%',
        backgroundColor: '#FEE2E2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    profilScreen:{
        width: "100%",
        height: "100%",
        backgroundColor: "#FEE2E2",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    columntambahbuku: {
        marginLeft: 15,
        marginRight: 15
    },
    InputBukuJudul:{
        margin: 10
    },
    inputBuku: {
        height :'100%',
        backgroundColor: '#FEE2E2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textlocation: {
        marginLeft: 10, 
        fontSize: 20, 
        marginTop: 10
    },
    headerDashboard : {
        width : '100%',
        height: '35%',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    headerProfil:{
        width : '100%',
        height: '5%',
        backgroundColor: '#fff'
    },
    headerBuKas: {
        width : '100%',
        height: '20%',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    logosplashscreen :{
        width: 100,
        height: 100,
        marginBottom: 10
    },
    textsplashscreen :{
        fontSize: 40,
        color: '#AE4E4E',
        fontWeight: 'bold'
    },
    containerLogin : {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: "100%",
        backgroundColor: '#fff',
        marginLeft: 30
    },
    daftarbuku: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
        width: "100%",
        backgroundColor: '#FEE2E2',
        marginTop: 20
    },
    logologinscreen :{
        width: 50,
        height: 50,
        marginRight: 10
    },
    textloginscreen :{
        fontSize: 35,
        color: '#AE4E4E',
        fontWeight: 'bold'
    },
    columnemaillogin : {
        flexDirection: 'column',
        width: "90%"
    },
    InputEmail: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#FAEDED',
    },
    InputBuku: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: "100%",
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    buttonbottom: {
        marginBottom: 10,
        backgroundColor:'#AE4E4E',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft:30,
        marginRight: 30,
        width: "90%",
        justifyContent: 'center',
        position: 'absolute',
        bottom:0,
    },
    buttonbottomregist: {
        backgroundColor:'#AE4E4E',
        borderRadius:10,
        borderColor: '#fff',
        height: 40,
        marginLeft:30,
        marginRight: 30,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    submitButton:{
        color:'#fff',
        textAlign:'center',
        fontSize: 20,
    },
    daftarlogin: {
        flex: 0.1,
        width: "100%",
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textonboarding: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold'
    },
    textonboardingdesc: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'center'
    }
})

export default style;