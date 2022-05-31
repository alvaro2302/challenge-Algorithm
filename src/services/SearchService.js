import ApiService from './ApiService';

async function search(email)
{
    let url = `/users?email=${email}`;
    const searchResults = await ApiService.get(url);
    return searchResults;
}
export default { search}

