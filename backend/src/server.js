import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('VAMO VAMo');
  return res.json({ ok: true });
});

app.listen(3333);
