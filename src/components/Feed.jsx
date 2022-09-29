import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar } from '../components'
export default function Feed() {
  return (
    <Stack sx={{ color: "#fff", flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 }}>
          Made By Programmer Victor Emanuel
        </Typography>
      </Box>
    </Stack>
  )
}
