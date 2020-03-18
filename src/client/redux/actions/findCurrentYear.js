export const type = "findCurrentYear";

const findCurrentYear = year => {
  return {
    type,
    payload: year
  };
};

export default findCurrentYear;
