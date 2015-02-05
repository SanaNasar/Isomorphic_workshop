module.exports = function setter(cookieStr, res) {
  if (res === null) throw new ArgumentError('Gimme a res plzz.');

  // document.cookie = cookieStr; setting the cookie which will default to index.js
  res.setHeader('Set-Cookie', cookieStr);

};