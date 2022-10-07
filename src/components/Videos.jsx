import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from './'


export default function Videos({ videos, direction }) {
  if (!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' alignItems="center" gap={1.5}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  )
}
