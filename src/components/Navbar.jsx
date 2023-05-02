import React, { useState } from 'react'
import { RiMovie2Line, RiSearchLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { Burger } from '@mantine/core'

const Navbar = () => {
  const navigate = useNavigate()
  const [opened, { toggle }] = useDisclosure(false)
  const [search, setSearch] = useState('')

  const searchBar = () => {
    return (
      <div className="flex justify-center">
        <form className="relative" onSubmit={searchHandler}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="rounded pl-2 pr-8 py-1 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <RiSearchLine
            className="absolute text-xl right-2 top-1.5 cursor-pointer"
            onClick={searchHandler}
          />
        </form>
      </div>
    )
  }

  const goToHome = () => {
    navigate('/')
  }

  const searchHandler = (e) => {
    e.preventDefault()
    toggle()
    setSearch('')
  }

  // TODO-LIST
  /*
  1. Hide the hamburger menu after clicking certain links
  2. Update the movie display after clicking certain links
  3. Update search Handler to direct search Page and Guard the page
  */

  return (
    <nav className="relative flex justify-between  items-center bg-slate-900 h-12 px-5 z-50">
      {/* mobile navigation bar */}
      <Burger
        className="md:hidden"
        color="#ffffff"
        opened={opened}
        onClick={toggle}
      />
      <div
        className="flex gap-1 justify-center items-center cursor-pointer"
        onClick={goToHome}
      >
        <RiMovie2Line className="text-2xl text-red-500" />
        <h1 className="text-2xl font-bold text-red-500">FLIXBASE</h1>
      </div>

      {/* Mobile hamburger display */}
      <div
        className={`md:hidden absolute bg-slate-900 h-[280px] w-full left-0  transition-all ${
          opened ? 'top-12' : 'top-[-280px]'
        }  duration-150 ease-in flex flex-col gap-4 p-5`}
      >
        {searchBar()}
        <div className="text-white flex flex-col gap-4">
          <button>New</button>
          <button>TV</button>
          <button>Film</button>
          <button>Popular</button>
          <button>Profile</button>
        </div>
      </div>

      {/* md Navigation Bar, No hamburger menu,  */}
      <div className="hidden text-white md:flex gap-4">
        <button>New</button>
        <button>TV</button>
        <button>Film</button>
        <button>Popular</button>
        <button>Profile</button>
      </div>

      <div className="hidden md:flex">{searchBar()}</div>
    </nav>
  )
}

export default Navbar
