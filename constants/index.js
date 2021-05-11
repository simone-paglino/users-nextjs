export const APIS = {
  BASEURL: "https://gorest.co.in/public-api/",
  USERS_PAG: (pageNum = 1) => `/users?page=${pageNum}`,
  USERS_NAME: (name = "") => `/users?name=${name}`,
  USER: (userId) => `users/${userId}`,
};

export const ROUTES = {
  HOME: "/",
  PROFILE: (userId) => `/${userId}`,
};

export const IMAGES = {
  FEMALE: "/images/female_icon.png",
  MALE: "/images/male_icon.png",
};
