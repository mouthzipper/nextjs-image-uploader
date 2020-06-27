export const getQuery = (limit: number, skip: number): string =>
  `limit=${limit}&body=${skip ? skip * limit : 0}`;
