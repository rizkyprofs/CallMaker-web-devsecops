import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
  res.json([{ id:1, pair:'BTC/USDT', type:'Buy', price:65000 }]);
});

export default router;
