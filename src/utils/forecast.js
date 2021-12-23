const request = require('request')

const forecast =(latitude, longitude, callback)=>{
    
    const url = 'http://api.weatherstack.com/current?access_key=221c4c25094e08ac0655c59f37a4e69d&query='+ latitude +','+ longitude +'&units=f'

    request({url , json:true}, (error, {body})=>{
        if(error)
      { 
        callback('unable to connect to weather service', undefined)
    }
    else if(body.error){
             callback('unable to find location',undefined)
    }else{
             callback(undefined,
                {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity,
                cloudcover:body.current.cloudcover

             })
         }
    })
}



module.exports = forecast