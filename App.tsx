import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import PasswordGenerator from './components/passwordGenerator';
import DiceRoller from './components/DiceRoller';

const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      
       <Flatcards />
       <ElevatedCards />
       <ContactList />
       <FancyCard />
       <FancyCard />
      <ActionCard />
      <PasswordGenerator />
      <DiceRoller />

    </ScrollView>
   </SafeAreaView>
  )
}

export default App;
