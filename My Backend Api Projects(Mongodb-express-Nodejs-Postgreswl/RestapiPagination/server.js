const express = require('express');
const app = express();


var users = [{
        id: 1,
        name: 'user 1'
    },
    {
        id: 2,
        name: 'user 2'
    },
    {
        id: 3,
        name: 'user 3'
    },
    {
        id: 4,
        name: 'user 4'
    },
    {
        id: 5,
        name: 'user 5'
    },
    {
        id: 6,
        name: 'user 6'
    },
    {
        id: 7,
        name: 'user 7'
    },
    {
        id: 8,
        name: 'user 8'
    },
    {
        id: 9,
        name: 'user 9'
    },

    {
        id: 10,
        name: 'user 10'
    },
    {
        id: 11,
        name: 'user 11'
    },
    {
        id: 12,
        name: 'user 12'
    },
    {
        id: 13,
        name: 'user 13'
    },

]


app.get('/users',(req, res) => {
     res.json(users)
})
port = 8080
app.listen(port , () => {
    console.log(`app is listening ${port}`)
});
