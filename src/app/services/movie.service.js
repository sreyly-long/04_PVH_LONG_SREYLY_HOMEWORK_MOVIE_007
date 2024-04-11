import { Amiri_Quran, Rye } from "next/font/google";

//Get All Movie
export async function getallMovies(){
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data= res.json();
    return data;
}

//Get Movie Action
export async function getAactionMovie() {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/?genre=Action');
    const dataOne = res.json();
    return dataOne;
}

//Get Movie Drama
export async function getDramaMovice(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/?genre=Drama');
    const dataTow = res.json();
    return dataTow;
}

//Get Movie By Id
export async function getMovieByIdService (id) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    const dataThree = res.json();
    return dataThree;
}
//Get Movie By Id Action
export async function getMovieByIdActionService(id) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/?/Action/${id}`);
    const dataFour = res.json();
    return dataFour;
}
