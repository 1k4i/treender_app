import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Images, Profiles } from './App/Themes';





export default function App() {
  return (
    <View style={styles.container}>
      <View style = {[styles.group, styles.navigation]}>
        <Image
          source={require('./App/Images/settings.png')}
          style={styles.n_settings}
          />
        <Image 
        source={require('./App/Images/treender-logo.png')}
        style={styles.n_logo}
        />
        <Image
          source={require('./App/Images/chatting.png')}
          style={styles.n_chatting}
          />
      </View>
      <View style = {[styles.group, styles.profile]}>
        <Image 
        source = {require('./App/Images/tree-profiles/hosler.jpg')}
        style = {styles.p_picture}
        />
        <Text style = {styles.p_user1}>
          Holser Oak, #7863
        </Text>
        <Text style = {styles.p_location}>
          Arboretum
        </Text>
      </View>
      <View style = {[styles.group, styles.icons]}>
        <Image
          source = {require('./App/Images/rewind.png')}
          style = {styles.i_undo}
          />
        <Image 
        source = {require('./App/Images/nope.png')}
        style = {styles.i_nope}
        />
        <Image
          source = {require('./App/Images/boost.png')}
          style = {styles.i_boost}
          />
        <Image
          source = {require('./App/Images/like.png')}
          style = {styles.i_like}
          />
        <Image
          source = {require('./App/Images/super-like.png')}
          style = {styles.i_superLike}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EADDCA',

  },
  group:{
    width: '100%',
  },
  navigation:{
    flex:1,
    flexDirection: "row",
    alignContent: 'center',
    borderColor: 'black',
    borderBottomWidth: 2,
    ...Platform.select({
      ios: {
        height: 44,
      },
      android:{
        height: 56,
        marginTop: 30,
      default:{
        marginTop: 40,
      }
      }, 
    })
  },
  n_settings:{
    flex: 1,
    alignItems:'flex-start',
    resizeMode:'contain',
    tintColor:'#C5C5C5',
    ...Platform.select({
      ios: {
        height: 44,
        marginTop: 55,
      },
      android:{
        height: 56,
        marginBottom: 10,
      }, 
      web:{
        marginTop:30,
      } 
    })
  },
  n_logo:{
    flex: 2,
    alignItems:'center',
    resizeMode:'contain',
    height: 60,
    padding:10,
    ...Platform.select({
      ios: {
        height: 44,
        marginTop: 55,
      },
      android:{
        height: 56,
        marginBottom: 10,
      },
      web:{
        marginTop:30,
      } 
    })
  },
  n_chatting:{
    flex: 1,
    alignItems:'flex-end',
    resizeMode:'contain',
    height:50,
    tintColor: '#C5C5C5',
    ...Platform.select({
      ios: {
        height: 44,
        marginTop: 55,
      },
      android:{
        height: 56,
        marginBottom: 10,
      }, 
      web:{
        marginTop:30,
      } 
    })
  },
  
  profile:{
    flex:5,
    flexDirection: 'column',
    textAlign:'center',
    backgroundColor: 'white',
    marginBottom: '20%',
    borderColor: '#C5C5C5',
    borderWidth: 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    ...Platform.select({
      ios: {
        maxHeight: '50%',
        maxWidth:'74%',
        marginTop: '30%',
      },
      android:{
        maxHeight: '70%',
        maxWidth:'80%',
        marginTop: '10%',
      }, 
      default:{
      },
    })         

  },
  p_picture:{
    flex: 1,
    resizeMode: 'cover',
    aspectRatio: 1,
    ...Platform.select({
      ios: {
        maxHeight: '80%',
        maxWidth:'100%',
        
      },
      android:{
        maxHeight: '70%',
        minWidth: '100%',
      }, 
      default:{
        maxHeight: '90%',
        maxWidth: '90%',
      },
    })
  },
  p_user1:{
    alignContent:'space-around',
    fontFamily:'Overpass',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  p_location:{
    textAlign:'left',
    fontFamily: 'Overpass',
    fontSize: 16,
    color:'light-grey',
    marginLeft: 10,
    marginTop: 10,
  },
  icons:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    alignContent: 'center',
    borderColor: 'black',
    ...Platform.select({
      ios: {
        height: 50,
        marginBottom: 20,
      },
      android:{
        height: 56,
        marginBottom: 70,
        marginHorizontal: 10,
      }, 
      default:{
      },
    })     
  },
  i_undo:{
    flex: 1,
    resizeMode: "contain",
    backgroundColor:'white',
    ...Platform.select({
      ios:{
        height:40,
        maxWidth: 40,
        marginTop: 30,
        marginLeft: 60,
        marginRight: 5,
        borderRadius: 40/2,
      },
      android:{
        height:50,
        maxWidth: 50,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 5,
        borderRadius: 50/2,
      },
      default:{
        maxHeight: 60,
        maxWidth: 60,
        marginTop: 40,
        borderRadius: 60/2,
      },
    })

  },
  i_nope:{
    flex:2,
    resizeMode: "contain",
    backgroundColor:'white',
    ...Platform.select({
      ios:{
        height:50,
        maxWidth: 50,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 50/2,      
      },
      android:{
        height:60,
        maxWidth: 60,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 60/2,
      },
      default:{
        maxHeight:80,
        maxWidth: 80,
        marginTop: 40,
        marginHorizontal: 5,
        borderRadius: 80/2,
      },
    })
  },
  i_boost:{
    flex:1,
    resizeMode: "contain",
    backgroundColor:'white',
    ...Platform.select({
      ios:{
        height:40,
        maxWidth: 40,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 40/2,
      },
      android:{
        height:50,
        maxWidth: 50,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 50/2,
      },
      default:{
        height:60,
        maxWidth:60,
        marginTop: 40,
        borderRadius: 60/2,
      },
    })
  },
  i_like:{
    flex:2,
    alignItems:'center',
    resizeMode: "contain",
    backgroundColor:'white',
    ...Platform.select({
      ios:{
        height:50,
        maxWidth: 50,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 50/2, 
      },
      android:{
        height:60,
        maxWidth: 60,
        marginTop: 30,
        marginHorizontal: 5,        
        borderRadius: 60/2,
      },
      default:{
        height: 80,
        maxWidth: 80,
        marginTop: 40,
        borderRadius: 80/2,
      },
    })
  },
  i_superLike:{
    flex:1,
    resizeMode: "contain",
    backgroundColor:'white',
    ...Platform.select({
      ios:{
        height:40,
        maxWidth: 40,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 40/2,
      },
      android:{
        height:50,
        maxWidth: 50,
        marginTop: 30,
        marginHorizontal: 5,
        borderRadius: 50/2,
      },
      default:{
        height: 60,
        maxWidth: 60,
        marginTop: 40,
        borderRadius: 60/2,
      },
    })
  },    


})