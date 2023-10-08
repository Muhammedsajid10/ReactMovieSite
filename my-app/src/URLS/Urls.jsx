import { API_KEY } from "../Components/Constants/Contstants"
import { baseUrl } from "../Components/Constants/Contstants"

export const comedyMovie = `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`
export const latestMovie = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`
export const popularMovie = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`
