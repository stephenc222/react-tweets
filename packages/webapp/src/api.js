const URL = 'http://localhost:8000/api'

export const api = {
  getTweets: (search = '#IoT') => {
    return fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => data)

  }
}
