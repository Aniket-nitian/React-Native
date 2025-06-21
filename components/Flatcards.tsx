import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Flatcards = () => {
  return (
    <View>
      <Text style={styles.headingtext}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}  numberOfLines={1}ellipsizeMode="tail">
            Red
          </Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}  ellipsizeMode="tail">
            Blue
          </Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}  ellipsizeMode="tail">
            Blue
          </Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}  ellipsizeMode="tail">
            Green
          </Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}  ellipsizeMode="tail">
            Blue
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Flatcards;

const styles = StyleSheet.create({
  headingtext: {
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  container: {
    flex:1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#50DBB4', 
  },
  card3: {
    backgroundColor: '#5DA3FA',
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
