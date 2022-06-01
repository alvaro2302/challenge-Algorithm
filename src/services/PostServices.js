import ApiService from './ApiService';
async function getPosts(id)
{
    let url = `/posts?userId=${id}`;
    const postsResults = await ApiService.get(url);
    return postsResults;
}
export default {getPosts};