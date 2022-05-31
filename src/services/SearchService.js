import ApiService from './ApiService';

async function search(email)
{
    let url = `/users?email=${email}`;
    const searchResults = await ApiService.get(url);
    console.log("service search", searchResults)
    return searchResults;
}
export default { search}

