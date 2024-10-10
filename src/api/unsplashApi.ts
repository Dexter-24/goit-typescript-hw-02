import axios from "axios";

// const API_KEY = 'gYm4Dxwc7b-JoAs3zqmAzS9m3OrZWI0I4DA_4P8nSxE';
// const BASE_URL = 'https://api.unsplash.com/search/photos';

// export const fetchImages<Data Type> = async (query: string, page: number = 1): Promise<Data Type> => {
//   const response = await axios.get(BASE_URL, {
//     params: {
//       query,
//       page,
//       per_page: 12,
//       client_id: API_KEY,
//     },
//   });
//   return response.data;
// };


  
export default async function getPhotos<DataType>(
  value: string,
  page: number = 1
): Promise<DataType> {
  const URL = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: "gYm4Dxwc7b-JoAs3zqmAzS9m3OrZWI0I4DA_4P8nSxE",
    query: value,
    per_page: 15,
    page,
  };

   const response = await axios.get(URL, { params });
  
  return response.data;
}