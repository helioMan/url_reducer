const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/urlreducer')
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render("index", {shortUrls: shortUrls})
})

app.post('/shorturl', async (req, res) => {
   await ShortUrl.create({full: req.body.fullUrl})
   res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
   const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})

   if(shortUrl == null) return res.sendStatus(404)

   shortUrl.clicks++
   shortUrl.save()

   res.redirect(shortUrl.full)
})

mongoose
  .connect(
    "mongodb+srv://aadisingh964:Urlreducer99@urlreducer.lkkvnlf.mongodb.net/?retryWrites=true&w=majority&appName=urlreducer"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });