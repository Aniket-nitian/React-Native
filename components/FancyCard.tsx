import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.heading}>Treanding Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{uri:"https://imgs.search.brave.com/TeTI5qxF1k-KCI_JZ8vwzsVvCB23IhZ6TbxktN924p8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY3Nr/LXRlYW0tY2VsZWJy/YXRpbmctdmljdG9y/eS14ZXN1dmo1cjNi/d2RwMnp4LmpwZw"}} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Chennai Super kings</Text>
          <Text style={styles.cardDescription}>The IPL, or Indian Premier League, is a professional Twenty20 cricket league in India. It was founded by the Board of Control for Cricket in India (BCCI) in 2007 and features teams representing different Indian cities.</Text>
          <Text style={styles.cardFooter}>Most Popular cricket league.</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
   heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 25,
  },
  cardElevated:{
    backgroundColor:'#ffffff',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  card:{
    height:360,
    borderRadius:6,
    marginHorizontal:12,
    marginVertical:12
  },
  cardImage:{
    height:200,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardBody:{
    flex:1,
    paddingHorizontal:12,
  },
  cardTitle:{
    color:'#000000',
    fontSize:22,
    fontWeight:"bold",
    marginBottom:6,
    
  },
  cardDescription:{
    color:'#758283',
    fontSize:14,
    marginBottom:12
  },
  cardFooter:{
    color:'#000000',
     
  }
})