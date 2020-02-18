export const getData = () => ({
  type: 'GET_DATA'
})

export const getDataSucceded = (data) => ({
  type: 'GET_DATA_SUCCEDED',
  data: data
})