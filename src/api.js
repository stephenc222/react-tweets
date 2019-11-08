import { DUMMY_TWEETS } from './DUMMY_TWEETS'


export const api = {
  getTweets: (search = '#IoT') => {
    return Promise.resolve(DUMMY_TWEETS)
  }
}
