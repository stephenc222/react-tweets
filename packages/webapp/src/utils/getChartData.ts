
const _wordCloudTransform = (wordCounts = {}) => {
  // @ts-ignore
  const wordCloudData = []
  Object.keys(wordCounts).forEach(key => {
    // @ts-ignore
    wordCloudData.push({ text: key, value: wordCounts[key]})
  })
  // @ts-ignore
  return wordCloudData
}

export const getChartData = (tweets: { statuses: [] }) => {
  const wordCounts = {} 
  tweets && tweets.statuses && tweets.statuses.forEach( tweet => {
    const { text = '' } = tweet
    const textArr = text.split(' ').map( word => word.toLocaleLowerCase())
    textArr.forEach( word => {
      // @ts-ignore
      if (!wordCounts[word]) {
        // @ts-ignore
        wordCounts[word] = 1
      } else {
        // @ts-ignore
        wordCounts[word] += 1
      }
    })
  })
  return _wordCloudTransform(wordCounts)
}