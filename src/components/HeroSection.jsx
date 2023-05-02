import React, { useState, useEffect } from 'react'
import { Carousel } from '@mantine/carousel'
import { AiFillStar } from 'react-icons/ai'

const HeroSection = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const API_KEY = '255aa518ee8ee99a74db9534c3e2978e'

  useEffect(() => {
    fetchPopularMovies()
  }, [])

  const fetchPopularMovies = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    const { results } = await api.json()
    const sliced = results.slice(0, 5)
    console.log(sliced)
    setPopularMovies(sliced)
  }
  return (
    <div className="bg-slate-900">
      <Carousel withControls={false} className=" max-w-full mx-auto">
        {popularMovies.map((movie) => {
          return (
            <Carousel.Slide key={movie.id} className="carousel-bg">
              <div className="flex flex-col items-center md:flex-row">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  className="object-cover h-full"
                />
                <div className="text-white p-5 relative w-full h-1/2">
                  <h1 className="text-2xl text-red-500 font-semibold tracking-wide">
                    {movie.title}
                  </h1>
                  <div className="mb-5 flex items-center gap-1">
                    <AiFillStar className="text-red-500" />
                    <span>{movie.vote_average}/10</span>
                  </div>
                  <p className="mb-5 text-sm whitespace-preline">
                    {movie.overview}
                  </p>
                  <button className="bg-red-500 px-5 py-1 hover:bg-slate-900 hover:text-red-500 hover:outline">
                    See More
                  </button>
                </div>
              </div>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </div>
  )
}

export default HeroSection

// TODO
// link see more bottom to details page
