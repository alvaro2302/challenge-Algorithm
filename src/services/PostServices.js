import ApiService from './ApiService';
async function getPosts(id)
{
    let url = `/posts?userId=${id}`;
    const postsResults = await ApiService.get(url);
    return postsResults;
}
async function getPost(idPost)
{
    let url = `/posts?id=${idPost}`;
    const postResult = await ApiService.get(url);
    return postResult; 
}
export default {getPosts,getPost};