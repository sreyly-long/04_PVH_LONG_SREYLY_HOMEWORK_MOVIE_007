export async function getallMovies(){
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');

    const data= res.json();
    return data;
}

export async function getAactionMovie() {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api/?genre=Action');
    const dataOne = res.json();
    return dataOne;
}