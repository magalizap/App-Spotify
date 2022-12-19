import { useEffect, useState } from 'react';

export const ApiSpotify = () => {

    const CLIENT_ID='340d7b49b1194c8bb639203d839f20d3'; // resolver importación desde .env
    const CLIENT_SECRET='d097616fcb5546229b355d12601e1258';

    const [accessToken, setAccessToken] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        //API acces token
        let authParam = {
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

      const featured = async() =>{
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
    
      }

      

}