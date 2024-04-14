import axios from "axios";

export const reelsapi = async (url) => {

  const options = {
    method: 'GET',
    url: 'https://fb-video-reels.p.rapidapi.com/smvd/get/all',
    params: {
      url: url,
      filename: 'RD_INSTA'
    },
    headers: {
      'X-RapidAPI-Key': process.env.MY_API_KEY,
      'X-RapidAPI-Host': 'fb-video-reels.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response
  } catch (error) {
    console.error(error);
  }
};
