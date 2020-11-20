import axios from 'axios';


export const handleError = (err) => {
    console.log(err);
};


export const getPokemnos = async () => {
    let tempFirstResponse=[];
    let fullResponse=[];

    await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => {
        tempFirstResponse = response.data.results;
      })
      .then( async () => {
        for (let i = 0; i < tempFirstResponse.length; i++) {
           await axios.get(tempFirstResponse[i].url)
           .then(response=>{
            fullResponse.push(response.data)
          })
        }
    })
    .catch(err=>handleError(err))
    return fullResponse
      }
