// const request = require('request')

// const geocode = (address, callback)=>{

//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoiYWJoaWR3aXZlZGk2NzkiLCJhIjoiY2tkeTc0NXhqMTV0YTJxcWl0YmNtOGl3eSJ9.B8X7CHdL-nYAD_y4T-N17g&limits=1'

//     request({ url:url, json:true }, (error, response)=>{
//         if(error){
//             callback('unable to connect to location services', undefined)
//         }else if(response.body.features.length === 0){
//             callback('unable to find location. try another search', undefined)
//         }else{
//             callback(undefined, {
//                 latitude: response.body.features[1],
//                 longitude: response.body.features[0],
//                 location: response.body.features[0].place_name
//             })
            

//         }
//     })
//   }

 

//   module.exports = geocode

const request =  require('request')


const geocode = (address, callback) =>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWJoaWR3aXZlZGk2NzkiLCJhIjoiY2tkeTc0NXhqMTV0YTJxcWl0YmNtOGl3eSJ9.B8X7CHdL-nYAD_y4T-N17g&limit=1'

    request({ url, json: true},(error,{body})=>{
        if(error){

            callback('Unable to connect to location servies',undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location. try another seach',undefined)
        }else{

        callback(undefined, {

            latitude: body.features[0].center[0],
            longitude: body.features[0].center[1],
            location: body.features[0].place_name

        })            
        }

    })
}

module.exports = geocode