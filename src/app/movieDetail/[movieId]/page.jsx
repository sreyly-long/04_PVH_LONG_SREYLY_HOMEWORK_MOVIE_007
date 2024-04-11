
import { getMovieByIdService } from '@/app/services/movie.service';
import React from 'react'

const MovieDetail = async ({ params }) => {
  const movieDetail = await getMovieByIdService(params.movieId);
  console.log("params", movieDetail);
  return (
    <>
      <div className="bg-red-950 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
              <section className="w-full flex justify-between">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={movieDetail.payload.image} alt="Product Image" />
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-white dark:text-white mb-2">{movieDetail.payload.movie_title}</h2>
                  <p className="text-white dark:text-gray-300 text-sm mb-4">
                    {movieDetail.payload.runtime}
                   <span className="m-1"> minutes</span>
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-white dark:text-gray-300">{movieDetail.payload.genre}</span>
                    </div>
                  
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-white dark:text-gray-300">Product Description:</span>
                    <p className="text-white dark:text-gray-300 text-sm mt-2">
                      {movieDetail.payload.description}
                    </p>
                  </div>
                  <div className="mt-10 text-white">
                    {movieDetail.payload.posted_at}

                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>

    </>

  )
}
export default MovieDetail;

