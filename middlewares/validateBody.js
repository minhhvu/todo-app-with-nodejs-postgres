module.exports = (...keys) => (req, res, next) => {
  // console.log(req)
  const body = req.body;
  let missing = [];
  for (let key of keys){
    if (body[key] === undefined) {
      missing.push(key)
    }
  }
  if (missing.length !== 0){
    const message = 'The request misses ' + missing.join(', ');
    res.status(404).json({error: message});
    return
  }
  next();
  // const message =  missing.length ===0 ? {
  //   ok: true
  // } : {
  //   ok: false,
  //   missing: 'The request misses ' + missing.join(', ')
  // }
}