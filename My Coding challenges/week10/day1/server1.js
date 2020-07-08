const [express, morgan, path] = [require('express'), require('morgan'), require('path')]
let app = express()
app.use(morgan('dev'))
app.get('/',(req,res,next)=>{
    if(req.query.Number === ''){
        res.send('Number required')
    } return res.status(404).send('Server Error'); 
    next()
}, (req, res)=>{
    res.send('number taken')
})
app.get('/square', (req, res)=>{
    res.json(parseInt(req.query.Number) * parseInt(req.query.Number))
    // console.log(square)
})
app.get('/squareroot', (req, res)=>{
    res.json(parseInt(req.query.Number) **0.5)
})

app.listen(8080)