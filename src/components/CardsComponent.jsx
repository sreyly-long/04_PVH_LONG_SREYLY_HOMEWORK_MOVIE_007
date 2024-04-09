import { getallMovies } from "@/app/services/movie.service"


export const CardsComponent = async () => {
    const getMovie = await getallMovies();
    return (
        <section className=" grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container w-full">
            {getMovie.payload.map((movie) => (
                 <a class="  p-3 max-w-[200px] border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                 href="#">

                 <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border" />
                 <div class="mt-3">
                     <h4 class="font-bold text-xl">Exercises</h4>
                     <p class="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                     </p>
                 </div>
             </a>
            ))}
               

        </section>
    )
}