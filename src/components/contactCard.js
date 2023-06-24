import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../constants/Constants';

const ContactCard = ({data,containerStyle,cardTitle,iconName,icon2Name}) => {
  return (
    <View style={containerStyle||styles.container}>
      <View style={styles.card}>
        <View style={{flexDirection:'row', justifyContent: "space-between",alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
          <FontAwesome name={iconName||"phone-square"} size={24} color="black" style={styles.leftIcon} />
          <Text style={styles.position}>{data?.position||cardTitle ||"Mayer"}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <FontAwesome name={icon2Name||"info-circle"} size={24} color="black" style={styles.rightIcon} />
          </View>
        </View>
       
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {

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
