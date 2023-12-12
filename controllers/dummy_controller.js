const helloWorld = (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.json({message: 'hello folks!'})
}

module.exports = {
    getWelcomeMessage: helloWorld
}