import { 
    StyleSheet, 
    Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View style={{alignItems:"center", justifyContent:"center", marginHorizontal:15}}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]} >
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://cdn.prod.website-files.com/5dcc7f8c449e597be23356e0/6578e3a5dfba7eb6b0c223b3_javascript-for-software-engineers-blog-hero-image.webp',
          }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer} >
            <Text numberOfLines={4}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer} >
            <TouchableOpacity
            onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
            >
                <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontWeight: 'bold',
        fontSize: 26,
        paddingHorizontal: 16,
        marginBottom: 10,
        color: '#fff',
    },
    card: {
        width: "100%",
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})