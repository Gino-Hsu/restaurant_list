// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {restaurant: restaurantList.results})
})
app.get('/restaurants/:restaurant_id', (req, res) => {
  const resId = req.params.restaurant_id
  const restaurant = restaurantList.results.find(res => res.id.toString() === resId)
  res.render('show', {restaurant})
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})