import { getAactionMovie, getallMovies } from "@/app/services/movie.service"

export const CardsComponent = async () => {
    const getMovie = await getallMovies();
    return (
        <section className="flex overflow-x-auto gap-3 no-scrollbar  pt-3 ">
            {getMovie.payload.map((movie) => (
                <div>
                    <a class="p-4 border w-[300px] bg-white border-indigo-300 rounded-lg hover:shadow-xl  flex flex-col items-center"
                        href="#">
                        <img src={movie.image ? movie.image : 'https://m.ykimg.com/053500006590DC8E13EB661B8CAC8E11'} alt="" />
                        <div class="mt-3 ">
                            <h4 class="font-bold text-xl line-clamp-1">{movie.movie_title}</h4>
                            <p class="mt-2 text-gray-600 line-clamp-2">
                                {movie.description}
                            </p>
                        </div>
                    </a>
                </div>
            ))}
        </section>

    )
}


export const ActionCard = async() => {
    const getMovieAction = await getAactionMovie();
    return(
        <>
           <section className="flex overflow-x-auto gap-3 no-scrollbar  pt-3 ">
            {getMovieAction.payload.map((movieAction) => (
                <div>
                    <a class="p-4 border w-[300px] bg-white border-indigo-300 rounded-lg hover:shadow-xl  flex flex-col items-center"
                        href="#">
                        <img src={movieAction.image ? movieAction.image : 'https://m.ykimg.com/053500006590DC8E13EB661B8CAC8E11'} alt="" />
                        <div class="mt-3 ">
                            <h4 class="font-bold text-xl line-clamp-1">{movieAction.movie_title}</h4>
                            <p class="mt-2 text-gray-600 line-clamp-2">
                                {movieAction.description}
                            </p>
                        </div>
                    </a>
                </div>
            ))}
        </section>
        </>
    )
}