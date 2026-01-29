export const ROWS_PER_PAGE = 10;
export const INITIAL_ROWS = 5;

export const getMonthStart = (dateString: string) => {
  const date = new Date(dateString);
  return new Date(date.getFullYear(), date.getMonth(), 1)
    .toISOString()
    .slice(0, 10);
};