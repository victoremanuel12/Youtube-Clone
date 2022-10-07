import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {  demoVideoUrl, demoChannelUrl, demoChannelTitle } from "../utils/constants";


export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <Card  sx={{ width: { xs: '315px', sm: '358px', md: "280px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.thumbnails.title}  sx={{ width: { xs: '315px', sm: '280px'}, height: '160px '}}  />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 40) || demoChannelTitle.slice(0, 40)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            <Stack flexDirection='row' sx={{alignItems: 'center',justifyContent: 'start' }}>
              <p>{snippet?.channelTitle || demoChannelTitle}</p>
              <p><CheckCircle sx={{fontSize:16,color:'gray', marginLeft:"5px", marginTop:'5px'}} /></p>
            </Stack>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
