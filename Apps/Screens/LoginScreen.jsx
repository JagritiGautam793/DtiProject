import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors' 
import {client} from './../Utils/KindConfig'
export default function LoginScreen() {


    const handleSignUp = async () => {
        const token = await client.register();
        if (token) { 
            console.log("Authenticates Successfully!!")
          // User was authenticated
          
        }
      };
      
      const handleSignIn = async () => {
        const token = await client.login();
        if (token) { 
            console.log("Authenticates Successfully!!")
          // User was authenticated
        }
      };




  return (
    <View>
        <Image source={require('./../../assets/images/uu.jpg')}
        style={{width:'100%',height:400,objectFit:'cover'}}/> 
        <View style={{padding:20}}>
            <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',color:Colors.PRIMARY}}>WELCOME TO URBANEX</Text> 
            <Text style={{fontSize:20,marginTop:7,color:Colors.GRAY}}>"Speak up, connect, resolve – your community, your voice."</Text> 
            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                <Text style={{textAlign:'center',fontSize:15}}>Sign In</Text>
            </TouchableOpacity>   
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={{color:Colors.PRIMARY,textAlign:'center',fontSize:15}}>Create New Account</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
} 
const styles = StyleSheet.create({
    button:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:300,
        marginTop:20, 
        borderColor:Colors.PRIMARY,
        borderWidth:3,
        borderRadius:10
    } 
})


