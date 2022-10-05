const express= required('express')
const app= express()

const PORT= process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(
        <h1>Bottle of beer on the wall</h1>
        <a href='${98}'>take one down pass it around</a></a>
    )
})
 app.listen(PORT, () => console.log('listening on port:${PORT}'))