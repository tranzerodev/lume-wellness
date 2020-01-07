const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://api.instagram.com/v1/users/self/media/recent'
  const token = '12578659184.1677ed0.543d1827b2ae4fb5957888faa5f1f75b'
  const limit = 10 
  axios
    .get(`${endpoint}?access_token=${token}&count=${limit}`)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(
          // posts
          posts.map(i => ({
            id: i.id, 
            link: i.link,
            images: i.images, 
            video: i.videos, 
            text: i.caption
          }))
        ),
      })
    })
    .catch((e) => {
      callback(e)
    }
  )
}
