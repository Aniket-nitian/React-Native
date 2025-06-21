import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      
       <Flatcards />
       <ElevatedCards />
       <FancyCard />
       <FancyCard />
       <FancyCard />
       <FancyCard />
       <FancyCard />
       <FancyCard />


    </ScrollView>
   </SafeAreaView>
  )
}

export default App;

const style = StyleSheet.create({
  body:{
    
  }
})