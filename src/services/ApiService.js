const API = "https://jsonplaceholder.typicode.com"

async function get(url){
  const options = {
      method:'GET',
      headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(`${API}${url}`,options);
  if (response.status == 200){
    const result = await response.json();
    return result;  
  }
  else {
    return null
  }

}

export default {get}