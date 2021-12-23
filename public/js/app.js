const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address= '+location).then((response)=>{
    
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.location

            const { weather, temperature, feelslike, humidity, cloudcover} = data.forecast
            messageTwo.textContent = `${weather} It is ${temperature} degrees Celcius, with a ${feelslike} chance of rain. also humidity is ${humidity} % and cloudcover is ${cloudcover} %`;
          
        }
        })
}) 
})