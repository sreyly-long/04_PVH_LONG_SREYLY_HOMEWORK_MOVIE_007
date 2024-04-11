'use client'
import ActionDetail from "./[actionId]/page"
import { MovieDetail } from "./[movieId]/page"

export const MoviceDetailPage = ({params}) => { 
    return(
        <section>
         <MovieDetail/>
         <ActionDetail/>
        </section>

    )
}

