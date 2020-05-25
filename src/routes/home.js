const express = require('express');
var fs = require('fs');
const router = express.Router();
var mustache = require('mustache');

router.get('/', (req, res) => {
  const viewModel = {
    pagePosTitle: 'titolo posizionamento',
    pageTitle: 'titolo pagina',
    pageDescription: 'titolo desrizione',
    link: {
      url: 'https://www.google.it/',
      label: 'link a google',
      target: '_blank',
    },
  };
  var page = fs.readFileSync('./build/views/home.html', 'utf8'); //TODO mettere qualcosa di relativo
  var html = mustache.to_html(page, viewModel);

  res.send(html);
});
module.exports = router;
