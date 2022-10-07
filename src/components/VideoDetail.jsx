import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from '@mui/icons-material'
import fetchFromAPI from '../utils/fetchFromAPI'
import { Videos, Loader } from './'

export default function VidelDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])
  

  if (!videoDetail?.snippet) return <Loader />;
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail // desestruturação do obejeto videoDetail
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography color="#fff" variant={{ sm: 'subtitle1', md: "h6" }} fontWeight="bold" display="flex" direction='row' alignItems='center' justifyContenty='center' >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '16px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap={'20px'} alignItems='center'>
                <Typography variant="body1" sx={{ opacity: 0.7 }} color='#fff'>
                  {parseInt(viewCount).toLocaleString()} Vews
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} color='#fff'>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}
