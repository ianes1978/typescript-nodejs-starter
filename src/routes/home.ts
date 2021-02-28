import { Request, Response,Router } from 'express';
const router = Router();

router.get('/',  (req, res) => {
  const viewModel = {
    page: {
      header: {
        title: 'header title',
      },
      title: 'page title',
      description: 'page description',
      links: [{
        url: 'https://www.google.it',
        label: 'google link',
        target: '_blank',
      }, {
        url: 'https://www.google.it?p=2',
        label: 'google link2',
        target: '_blank',
      }],
    },
  };

  res.render('home', viewModel);
});
export { router };
