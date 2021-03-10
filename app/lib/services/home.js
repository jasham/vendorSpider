import URLS from '../utility/apis';
import request from '../utility/apiWrapper';

// export const subCategory = async () => {

//     const data = await axios.get("http://localhost:8080/api/v1/user/sub_category")

//     return Promise.resolve(data)
// }

export const subCatService = () =>
  request({ url: `${URLS.SUBCATEGORY}`, method: 'get' });

export const bookService = (data) =>
  request({ url: `${URLS.BOOKING_API}`, method: 'post', data });
