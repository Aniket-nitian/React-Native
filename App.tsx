import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import DiceRoller from './components/DiceRoller';
import PasswordGenerator from './components/PasswordGenerator';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <AppNavigator />
  //  <SafeAreaView>
  //   <ScrollView>
      
  //      {/* <Flatcards />
  //      <ElevatedCards />
  //      <ContactList />
  //      <FancyCard />
  //      <FancyCard />
  //     <ActionCard />
  //     <PasswordGenerator />
  //     <DiceRoller/>
  //     <CurrencyConverter /> */}
    
  //   </ScrollView>
  //  </SafeAreaView>
  )
}

export default App;
