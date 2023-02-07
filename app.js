const express = require('express')

const app = express()

const hbs = require('hbs')


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page'
    })
})

app.get('/about', (req, res) => {
    const factsArray = [
        {fact : "His real name is Ishihara Takamasa"},
        {fact : "He was born September 14, 1981"},
        {fact : "He's a Japanese guitarist, songwriter, singer, record producer and actor"},
        {fact : "He started his solo career in 2002"},
        {fact : "In november 2022, it was announced that he will be in the band The Last Rockstar with Hyde from l'Arc~en~ciel, Yoshiki and Sugizo from X Japan"}
    ]
    res.render('about', {
        title: 'About him',
        facts: factsArray,
        css: ['about']
    })
})

app.get('/works', (req, res) => {
    const discographyArray = [
        {name : "Gagaku", date : "october 2002"},
        {name : "Galyuu", date : "december 2003"},
        {name : "Miyavizm", date : "june 2005"},
        {name : "MYV Pops", date : "august 2006"},
        {name : "Miyaviuta : Dokuso", date : "september 2006"},
        {name : "This Iz the Japanese Kabuki Rock", date : "march 2008"},
        {name : "What's my name", date : "october 2010"},
        {name : "Miyavi", date : "june 2013"},
        {name : "The Others", date : "april 2015"},
        {name : "Fire bird", date : "august 2016"},
        {name : "Samurai Sessions, Vol.2", date : "november 2017"},
        {name : "Samurai Sessions, Vol.3: World Collide", date : "december 2018"},
        {name : "No sleep till Tokyo", date : "july 2019"},
        {name : "Holy Nights", date : "april 2020"},
        {name : "Imaginary", date : "september 2021"}
    ]
    const filmographyArray = [
        {name : "Oresama"},
        {name : "Unbroken"},
        {name : "Bleach"},
        {name : "Maleficient: Mistress of Evil"},
        {name : "Kate"},
        {name : "Bright: Samurai Soul"},
        {name : "Hell Dogs"},
        {name : "Familia"}
    ]
    res.render('works', {
        title: 'His work',
        discography: discographyArray,
        filmography: filmographyArray
    })
})

app.get('/gallery', (req, res) => {
    res.render('gallery', {
        title: 'Gallery'
    })
})

app.listen(3000, () =>
  console.log(`App is live on http://localhost:3000`)
)