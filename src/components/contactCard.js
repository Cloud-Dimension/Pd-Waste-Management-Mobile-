import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/Constants';

const ContactCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{flexDirection:'row', justifyContent: "space-between"}}>
          <View style={{flexDirection:'row'}}>
          <FontAwesome name="phone-square" size={28} color="black" style={styles.leftIcon} />
          <Text style={styles.position}>{data.position||"Mayer"}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <FontAwesome name="info-circle" size={28} color="black" style={styles.rightIcon} />
          </View>
        </View>
       
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginBottom:10
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: COLORS.GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
    padding: 10,
    height: 45,
    marginLeft: 20,
    marginRight: 20,
    width:350
  },
  leftIcon: {
    marginRight:0,
    borderRadius:6,
    color:COLORS.PRIMARY
  },
  rightIcon: {
    marginLeft:10,
    marginRight:10,
    color:COLORS.PRIMARY,
    borderRadius:6,
  },
  position: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft:10,
  },
});
