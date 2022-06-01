const API = "https://jsonplaceholder.typicode.com"

async function get(url){
  const options = {
      method:'GET',
      headers: {'Content-Type': 'application/json'}
  }
 
  try{
    const response = await fetch(`${API}${url}`,options)
    .then(res => res.json())
    .then(users => users)
   console.log("response",response)
   return response;
  }
  catch(error){
    throw(Error("ocurred error: ",error))
  }
  
  

}

export default {get}