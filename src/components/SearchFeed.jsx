import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from '../components'
import { useParams } from 'react-router-dom'
import fetchFromAPI from '../utils/fetchFromAPI'
export default function SearchFeed() {
  const [videos, setvideos] = useState([])
  const {searchTerm}= useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setvideos(data.items) })
  }, [searchTerm]);
  return (
    <Box p={1.5} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: '#FFF' }}>
       Results for :  <span style={{ color: "#F31503" }}>{searchTerm} </span > videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}
