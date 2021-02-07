const moongoose = require('mongoose')

moongoose.connect('mongodb://localhost:/prueba',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

.then(db => console.log("db is succesfully!"))
.catch (err => console.error(err));