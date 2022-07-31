import React,{useState} from 'react';
import {View,
        Text,
        Dimensions,
        Image,
        ToastAndroid,
        TextInput,
        ImageBackground,
        TouchableOpacity,
        StyleSheet} from 'react-native';
import TimeIcon from '../assets/timer.svg';


const EnterOTP=({navigation,route})=>{

    const {num} = route.params;
    //console.warn(num);

    const styles=StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#fff'
        },
        image:{
            flex: 1,
            justifyContent: "center",
        },
        upperHeader:{
            flex: 1,
            //backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
        },
        lowerHeader:{
            flex: 1,
        },
        h1:{
            position: 'absolute',
            right: 50,
            top: 170,
            alignItems: 'flex-end'
        },
        text:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textInput:{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        sendButton:{
            flex: 1,
            marginTop: 15,
        },
        noAcc:{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        registerButton:{
            flex: 1.5,
            justifyContent: 'flex-start',
        },
        input: {
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            borderRadius: 35,
            height: 50,
            color: "#000000",
            //paddingHorizontal: 0,
            backgroundColor: '#fff',
          },
    })

const image = require("../assets/back.png");
const[number,setNumber]=useState("");

  return(
    <View style={styles.container}>
        <Image
        style={{
            resizeMode: 'stretch',
            position: 'absolute',
            height: 500,
            width: Dimensions.get("window").width,
            right: 0,
            left: 0,
            top: 0,
        }}
        source={require('../assets/login-bg.png')}/>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.upperHeader}>
        <View 
        elevation={20}
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 150,
            backgroundColor: '#fff',
            height: 200,
            borderRadius: 120,
            width: 200,
            padding: 10,
        }}>
            <TimeIcon width={100} height={100}/>
        </View>    
      </View>  

      <View style={styles.lowerHeader}>
        <View style={styles.text}>
            <Text style={{color: '#000000',fontSize: 20,fontWeight: "bold"}}>Enter OTP</Text>
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{color: '#000000',fontSize: 14}}>Code is sent to your number </Text>
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{color: '#000000',fontSize: 14,fontWeight: 'bold'}}> +91{num}  </Text>
            <Image
                style={{
                    height: 13,
                    width: 13,
                }}
                source={require('../assets/edit.png')}/>
            </TouchableOpacity>    
            </View>
        </View>

        <View style={styles.textInput}>
            <TextInput
                maxLength={1}
                style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginLeft: 40,
                    marginRight: 10,
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    //marginHorizontal: 10,
                    borderRadius: 35,
                    height: 60,
                    color: "#000000",
                    //paddingHorizontal: 0,
                    backgroundColor: '#fff',
                }}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="_"
                keyboardType="numeric"
            />
            <TextInput
                maxLength={1}
                style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginRight: 10,
                    marginLeft: 10,
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 35,
                    height: 60,
                    color: "#000000",
                    backgroundColor: '#fff',
                }}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="_"
                keyboardType="numeric"
            />
            <TextInput
                maxLength={1}
                style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginRight: 20,
                    marginLeft: 10,
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 35,
                    height: 60,
                    color: "#000000",
                    backgroundColor: '#fff',
                }}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="_"
                keyboardType="numeric"
            />
            <TextInput
                maxLength={1}
                style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginRight: 40,
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 55,
                    height: 60,
                    color: "#000000",
                    backgroundColor: '#fff',
                }}
                //onChangeText={onChangeNumber}
                //value={number}
                placeholder="_"
                keyboardType="numeric"
            />
        </View>

        <View style={styles.sendButton}>
            <TouchableOpacity 
            onPress={()=>{
                ToastAndroid.show("Welcome !",ToastAndroid.SHORT);
            }}
            style={{borderRadius: 25,
                                      borderColor: '#fff',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginHorizontal: 40,
                                      paddingVertical: 12,
                                      borderWidth: 0.5,}}>
                <Text style={{color: '#fff',fontSize: 17,fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>    
        </View>

        <View style={styles.noAcc}>
            <Text style={{color: '#000000',fontSize: 14,fontWeight: 'normal'}}>Don't received OTP ?</Text>
        </View>

        <View style={styles.registerButton}>
        <TouchableOpacity style={{borderRadius: 25,
                                      borderColor: '#fff',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginHorizontal: 100,
                                      paddingVertical: 14,
                                      borderWidth: 0,}}>
                <Text style={{color: '#fff',fontSize: 13,fontWeight: 'bold'}}>RESEND OTP</Text>
            </TouchableOpacity>
        </View>    
      </View>    
    </ImageBackground> 
    </View>
  );
};

export default EnterOTP;