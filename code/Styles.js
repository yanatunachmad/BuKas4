import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    containerLoginScreen : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 30,
    },
    containerLogin : {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginBottom: 30,
        backgroundColor: '#fff'
    },
    logologinscreen :{
        width: 50,
        height: 50,
        marginRight: 20
    },
    textloginscreen :{
        fontSize: 35,
        color: '#AE4E4E',
        fontWeight: 'bold'
    },
    columnemaillogin : {
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    InputEmail: {
        borderColor: 'gray', 
        borderWidth: 2,
        width: 300,
        paddingLeft: 15,
        borderRadius: 10,
        marginLeft: 30,
        backgroundColor: '#FAEDED',
    },
    buttonbottom: {
        marginBottom: 10,
        backgroundColor:'#AE4E4E',
        borderRadius:10,
        borderColor: '#fff',
        width: 300,
        height: 40,
        position: 'absolute',
        justifyContent: 'center',
        bottom:0,
        left: 64
    },
    submitButton:{
        color:'#fff',
        textAlign:'center',
        fontSize: 20,
        justifyContent: 'center'
    },
    daftarlogin: {
        flex: 0.1,
        width: 300,
        marginTop: 90,
        marginLeft: 30,
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