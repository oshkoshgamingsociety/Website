function StringArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '

  }
}

function outputcooltext (n) {
	var texts = cooltext[n]
	document.write(texts)
}
function outputcooltitle (n) {
	beg = '<p align="center"><font color="#FFFFFF" face="Verdana, Arial, Helvetica, sans-serif" size="-1">'
	end = '</font>'
	document.write(beg + cooltitle[n] + end)
}