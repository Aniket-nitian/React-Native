import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const cardData = [
  { label: 'Tap', emoji: '👆', color: '#FFB6C1' },
  { label: 'Me', emoji: '😎', color: '#87CEEB' },
  { label: 'To', emoji: '🚀', color: '#FFD700' },
  { label: 'Scroll', emoji: '📜', color: '#90EE90' },
  { label: 'More...', emoji: '✨', color: '#FFA07A' },
  { label: '!!', emoji: '😉', color: '#DDA0DD' },
];

const ElevatedCards = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.heading}>🎴 Elevated Cards</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cardData.map((item, index) => {
          return <View
            key={index}
            style={[styles.card, { backgroundColor: item.color }]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
})}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ElevatedCards;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    //backgroundColor: '#1E1E1E',
    paddingTop: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  card: {
    width: width * 0.35,
    height: 140,
    marginRight: 12,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  emoji: {
    fontSize: 66,
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
