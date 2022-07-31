import React,{useState} from 'react';
import {View,
        Text,
        Dimensions,
        Image,
        TextInput,
        ToastAndroid,
        ImageBackground,
        TouchableOpacity,
        StyleSheet} from 'react-native';

const OTPScreen=({navigation})=>{

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
            marginRight: 40,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            height: 50,
            color: "#000000",
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            borderWidth: 0,
            padding: 10,
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
      
        <View style={styles.h1}>
        <Image
        style={{
            resizeMode: 'stretch',
            position: 'absolute',
            height: 90,
            width: 90,
            //right: 0,
            right: 60,
            bottom: 50,
            //top: 0,
        }}
        source={require('../assets/sign.png')}/>
        <Text style={{color: '#000000',fontSize: 25}}>T H E   P L A N N E R S</Text>
        <Text style={{color: '#757575',fontSize: 10}}>—   Y O U R  W I S H  O U R  P L A N S   — </Text>
        </View>
      </View>

      <View style={styles.lowerHeader}>
        
        <View style={styles.text}>
            <Text style={{color: '#000000',fontSize: 20,fontWeight: "bold"}}>Enter your mobile number</Text>
            <Text style={{color: '#000000',fontSize: 14}}>& get an one time password (OTP)</Text>
        </View>

        <View style={styles.textInput}>
                <View style={{
                    flex: 0.5,
                    marginLeft: 40,
                    borderBottomLeftRadius: 25,
                    borderTopLeftRadius: 25,
                    backgroundColor: '#ef5350',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{color: '#fff',fontSize: 15,fontWeight: 'bold'}}>+91</Text>
                </View>  
                
                <Image
                    style={{
                            resizeMode: 'stretch',
                            position: 'absolute',
                            height: 17,
                            width: 17,
                            zIndex: 5,
                            right: 60,
                            bottom: 30,
                        }}
                        source={require('../assets/tick.png')}/>
                <TextInput
                style={styles.input}
                onChangeText={(num)=>{setNumber(num)}}
                value={number}
                placeholder="Enter number"
                keyboardType="numeric">
                </TextInput>
        </View>

        <View style={styles.sendButton}>
            <TouchableOpacity 
            onPress={()=>{
                if(number.length == 10){
                navigation.navigate('EnterOTP',{
                    num: number,
                });
            }
            else{
                ToastAndroid.show("Please enter valid number",ToastAndroid.SHORT);
            }
            }}
            style={{borderRadius: 25,
                                      borderColor: '#fff',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginHorizontal: 40,
                                      paddingVertical: 12,
                                      borderWidth: 1.1,}}>
                <Text style={{color: '#fff',fontSize: 17,fontWeight: 'bold'}}>Send OTP</Text>
            </TouchableOpacity>    
        </View>

        <View style={styles.noAcc}>
            <Text style={{color: '#000000',fontSize: 14,fontWeight: 'normal'}}>Don't have an account ?</Text>
        </View>

        <View style={styles.registerButton}>
        <TouchableOpacity style={{borderRadius: 25,
                                      borderColor: '#fff',
                                      backgroundColor:  '#ffffff60',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginHorizontal: 100,
                                      paddingVertical: 14,
                                      borderWidth: 0,}}>
                <Text style={{color: '#fff',fontSize: 13,fontWeight: 'bold'}}>REGISTER NOW</Text>
            </TouchableOpacity>
        </View>    
      </View>    
    </ImageBackground> 
    </View>
  );
};

export default OTPScreen;