// returns a simple array of tweets 
export const getListData = (tweets: { statuses: [] }) => {
  return tweets && tweets.statuses && tweets.statuses.map( tweet => {
    const { text, user, created_at } = tweet
    const { name } = user
    return {
      name,
      text,
      user,
      created_at
    }
  })
}