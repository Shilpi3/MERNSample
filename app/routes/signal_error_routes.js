module.exports = function(app, db) {
    app.post('/error', (req, res) => {
    console.log(req.body);
    res.send('Error received!!')
  });
};