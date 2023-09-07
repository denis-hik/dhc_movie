export const urlBase = "https://api.themoviedb.org/3";
export const apiKey = "88c8850e8777f4729b2fb5965887fe13";
export const lang = "en-US";

export const urlSearch = `${urlBase}/search/movie?api_key=${apiKey}&language=en-US&query=`
export const urlDiscovery = `${urlBase}/discover/movie?api_key=${apiKey}&language=en-US`
export const urlFilm = (id: string) => `${urlBase}/movie/${id}?api_key=${apiKey}&language=en-US&query=`

