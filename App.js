import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import HyperLink from 'react-native-hyperlink'
import PentaNavigator from './src/navigation/PentaNavigator';

export default function App() {
 /* const CLIENT_ID='340d7b49b1194c8bb639203d839f20d3'; // resolver importación desde .env
  const CLIENT_SECRET='d097616fcb5546229b355d12601e1258';


  const [accessToken, setAccessToken] = useState("")
  const [items, setItems] = useState([])

  useEffect(() => {
    //API acces token
    let authParam={
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'

      },
      body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParam)
      .then(res=>res.json())
      .then(data=>setAccessToken(data.access_token))
   
    
  }, [])

  const featured=async()=>{
    let params={
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + accessToken

      }
    }
    await fetch('https://api.spotify.com/v1/browse/featured-playlists', params)
      .then(res=>res.json())
      .then(data=>setItems(data.playlists.items))
      //.then(data => setItems(console.log(data.playlists.items)))

  }*/


  return <PentaNavigator/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 80,
    height: 80,
  },
  button: {
    width: 50,
    height:20
  }
});



/**
 * 
 *     <View style={styles.container}>
      <Pressable onPress={featured}>
        <Text>Mejores Playlist</Text>
      </Pressable>
      
       {
        items && items.map(play=>{
        
          return(
            <View key={play.id}>
                <Image style={styles.img} source={play.images[0].url}/>
                <Text>{play.name}</Text>
              <HyperLink linkDefault={true}>
                <Text>
                  Go to spotify {play.external_urls.spotify}
                </Text>
              </HyperLink>
                
            </View>
          )
        })
      }
     
      </View>
 * 
 */