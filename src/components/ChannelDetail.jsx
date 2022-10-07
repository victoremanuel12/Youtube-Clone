import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard,Loader } from './'
import fetchFromAPI from '../utils/fetchFromAPI'
export default function ChannelDetail() {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);


  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  
  if (!videos?.length) return <Loader />;


  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,9,9,1) 0%, rgba(227,7,32,1) 98%)",
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard marginTop={"-110px"} channelDetail={channelDetail} />
      </Box>
      <Box p={1} display="flex" > 
        <Box sx={{ mr: { sm: '80px' } }}/>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}
