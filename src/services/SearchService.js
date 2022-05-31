import ApiService from './ApiService';

async function search(email)
{
    let url = '/users'
    const searchResults = await ApiService.get(url);
    const filterResults = searchResults.filter(user => user.email === email)
    return filterResults;
}
export default { search}

