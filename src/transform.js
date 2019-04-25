module.exports = (str) => {
  if(!str){
    str = ""
  }
  
  const res = []
  for(let i = 2; i < str.length; i += 3){
    res.push(str[i])
  }
  return res.join('')
}