import rolly from 'rolly.js';

const r = rolly({
  view: document.querySelector('./app.js'),
  native: true,
  // other options
});
r.init();