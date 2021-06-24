export const addJobToFavouriteAction = (job) => ({
  type: 'ADD_JOB_TO_FAVOURITE',
  payload: job,
});

export const removeJobFromFavouriteAction = (index) => ({
  type: 'REMOVE_JOB_FROM_FAVOURITE',
  payload: index,
});
