require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData =
    {
        "login": "asshejan",
        "id": 106191432,
        "node_id": "U_kgDOBlRaSA",
        "avatar_url": "https://avatars.githubusercontent.com/u/106191432?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/asshejan",
        "html_url": "https://github.com/asshejan",
        "followers_url": "https://api.github.com/users/asshejan/followers",
        "following_url": "https://api.github.com/users/asshejan/following{/other_user}",
        "gists_url": "https://api.github.com/users/asshejan/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/asshejan/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/asshejan/subscriptions",
        "organizations_url": "https://api.github.com/users/asshejan/orgs",
        "repos_url": "https://api.github.com/users/asshejan/repos",
        "events_url": "https://api.github.com/users/asshejan/events{/privacy}",
        "received_events_url": "https://api.github.com/users/asshejan/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "As Shejan",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": true,
        "bio": "Student at North South University\r\nComputer Science and engineering Department.",
        "twitter_username": null,
        "public_repos": 30,
        "public_gists": 0,
        "followers": 2,
        "following": 10,
        "created_at": "2022-05-24T20:02:00Z",
        "updated_at": "2024-09-22T22:08:22Z"
      }
      

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('as_shejan')
})

app.get('/login', (req, res) => {
    res.send('<h1> there you go </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> this is shejan </h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

