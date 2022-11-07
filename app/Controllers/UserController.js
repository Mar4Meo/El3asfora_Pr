function index (req , res) {
    res.render('Index', {Title : "Home"});
}

module.exports = {
    Index: index,
}