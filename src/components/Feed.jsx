import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos} from '../components'
import fetchFromAPI from '../utils/fetchFromAPI'

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('TV Globo')
  const [videos,setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setvideos(data.items)})
  }, [selectedCategory]);
  return (
    <Stack sx={{ color: "#fff", flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      </Box>
      <Box p={1} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: '#FFF' }}>
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span >
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
