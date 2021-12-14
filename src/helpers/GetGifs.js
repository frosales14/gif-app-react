export const getGif = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=kDTOUFzEvqHINnNpliU3P09NG212uGwb`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    console.log(url);
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });

    return gifs;
}