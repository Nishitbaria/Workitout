export const exerciseOptions =   {
 method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '6fdb9bb6cemsha790c712c436658p11c3dajsn2c0ef2069255',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '766964f085msh86eb00b9313f6fep152eddjsn79c70f439cb2',
  },
};



export const fetchData = async (url, options) => { 
const response = await fetch(url, options);
const data = await response.json();

return data;
}
