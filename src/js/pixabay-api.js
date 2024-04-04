export function getImages(query) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api/";
  const params = new URLSearchParams({
    key: "43196488-b1a28e2a6e2ea3f6c7718f6c5",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  })
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.error('Error occurred while fetching images:', error);
      throw error;
    });
}