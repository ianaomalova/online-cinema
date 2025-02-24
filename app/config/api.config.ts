export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
export const getMoviesUrl = (string: string) => `/movies${string}`;
export const getGenresUrl = (string: string) => `/genres${string}`;
export const getActorsUrl = (string: string) => `/actors${string}`;
export const getRatingUrl = (string: string) => `/rating${string}`;

