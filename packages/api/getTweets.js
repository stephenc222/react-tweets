const fetch = require('node-fetch')

function stepOneEncodeConsumerKeyAndSecret(key, secret) {
  const encodedKey = encodeURIComponent(key)
  const encodedSecret = encodeURIComponent(secret)
  const encodedKeySecret = `${encodedKey}:${encodedSecret}`
  const b64EncodedKeySecret = Buffer.from(encodedKeySecret).toString('base64')
  return Promise.resolve(b64EncodedKeySecret)
}

function stepTwoObtainBearerToken(b64EncodedKeySecret) {
  const url = 'https://api.twitter.com/oauth2/token'
  return fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Basic ${b64EncodedKeySecret}`
    },
    body: 'grant_type=client_credentials'
  }).then(res => res.json(), err => console.error(err)).catch(err => console.error(err))
}

function stepThreeAuthenticateAPIRequestWithBearerToken(tokenJSON, { requestFunction, requestParams }) {
  const { token_type: tokenType, access_token: accessToken } = tokenJSON
  if (tokenType !== 'bearer') {
    return Promise.reject(new Error('Invalid bearer token!'))
  }
  if (typeof requestFunction !== 'function') {
    return Promise.reject(new Error('Invalid API request function!'))
  }
  if (!requestParams) {
    requestParams = []
  }
  return requestFunction(...requestParams, accessToken)
}

function getTweetsByHashtag(hashtag, bearerToken) {
  const base = 'https://api.twitter.com/1.1/search/tweets.json'
  const url = `${base}?q=%23${hashtag}&count=100`
  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearerToken}`
    }
  }).then(res => res.json(), err => console.error(err)).catch(err => console.error(err))
}

function getTweets() {
  const key = process.env.API_KEY
  const secret = process.env.API_SECRET_KEY
  return stepOneEncodeConsumerKeyAndSecret(key, secret)
    .then(stepTwoObtainBearerToken)
    .then(tokenJSON => stepThreeAuthenticateAPIRequestWithBearerToken(tokenJSON, {
      requestFunction: getTweetsByHashtag,
      requestParams: ['IoT']
    }))
}

module.exports = () => Promise.resolve(getTweets())