const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
// const methodOverride = require('method-override')
const app = express()

// mongoose.connect('mongodb://localhost/blog', {
//   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
// })

mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
// app.use(methodOverride('_method'))

app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }
]
    res.render('articles/index', {articles : articles})
})

app.use('/articles', articleRouter)
app.listen(5000)