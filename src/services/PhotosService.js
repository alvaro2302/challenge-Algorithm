import ApiService from './ApiService';
async function getImage(id)
{
    let url = `/photos?id=${id}`;
    const photoResult = await ApiService.get(url);
    return photoResult;
}
export default {getImage};