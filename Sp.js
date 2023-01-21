const express = require('express')

const fs = require('fs')



const port = 3000

app.get('/', async (req, res) => {

    const {url} = req.query

    

    if (!url) {

         return res.send("url miss")
    } else {

        // generate puppeteer screenshot 
    
    const readable = fs.createReadStream(url)
}

}
app.listen(port, () => {

    console.log('listening on port ' + port)

})
