import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'stick',
        background: '#000',
        top: 0,
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
          <img src={logo}  height={45} alt="Logo Youtube" />
        </Link>
        <SearchBar/>
    </Stack>
  )
}
