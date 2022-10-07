import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, CardContent, CardMedia, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants';

export default function ChannelCard({ channelDetail,marginTop }) {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px',  md: '280px' },
        height:'326px',
        margin:'auto',
        marginTop:marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{borderRadius:'50%',height:'180px', width:'180px',mb:2, border:'1px solid #e3e3e3'}}
          />
          <Typography  variant='h6'sx={{color:'#fff', textAlign:'center'}}>
           <Stack flexDirection='row' sx={{alignItems: 'center',justifyContent: 'center' }}>
              <p>{channelDetail?.snippet?.title.slice(0, 18) }</p>
              <p><CheckCircle sx={{fontSize:16,color:'gray', marginLeft:"5px", marginTop:'5px'}} /></p>
           </Stack>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray',  textAlign:'center'}}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </ Box>
  )
}
