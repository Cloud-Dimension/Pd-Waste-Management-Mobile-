import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComplaintDetails = ({route}) => {
    const {description} = route.params;
  return (
    <View style = {styles.container}>
      <Text style = {styles.message}>{description}</Text>
    </View>
  )
}

export default ComplaintDetails

const styles = StyleSheet.create({
    container:{
     padding:20,
     backgroundColor:'rgba(0, 0, 0, 0.03)',
     width:'90%',
     alignSelf:'center',
     marginTop:20,
     borderRadius:6
    },
    message:{
      fontWeight:'400',
      fontSize:13,
      lineHeight:18,
      textAlign:'justify'
    }
})