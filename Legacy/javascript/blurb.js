function StringArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '

  }
}

function outputblurb (n) {
	var texts = btext[n]
	var begin = '<p align="center"><b><font face="Georgia">'
	var ubreak = '</font></b><br>&nbsp;&nbsp;&nbsp;&nbsp;<font face="Georgia">'
	var title = btitle[n]
	var end = '</font></p>'
	document.write(begin + title + ubreak + texts + end)
}