import axios from 'axios';


export const handleError = (err) => {
    console.log(err);
};


  




export const getPokemnos = async () => {

    let tempFirstResponse=[];
    let temp=[];
    let fullResponse=[];
    await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => {
        tempFirstResponse = response.data.results;
      })
      .then( async (data) => {
        for (let i = 0; i < tempFirstResponse.length; i++) {
           await axios.get(tempFirstResponse[i].url).then(response=>{
            temp = response.data;
            fullResponse.push(temp)
          })
        }
        console.log(fullResponse);
    })
    .catch(err=>console.log(err))
    return fullResponse
      }
