const BASE_URL = 'http://localhost:7001/api/v1'

async function request(url, method = 'GET', body = {}) {
  url = BASE_URL + url
  return await fetch(url, {
    method,
    body
  })
    .then(data => data.json())
    .then(data => data)
}

export default request