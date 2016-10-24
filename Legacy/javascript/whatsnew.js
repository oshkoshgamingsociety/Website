function StringArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '

  }
}

function outputonen (n) {
	var texts = wnew[n]
	var begin = '<p><font size="3"><b><i>'
	var ubreak = '</i>&nbsp; </b></font><font size="2">'
	var times = dwhen[n]
	var end = '</font></p>'
	document.write(begin + times + ubreak + texts + end)
}

function outputnews (n) {
	for (var j=0; j<=n; j++) {
		outputonen (j)
	}
}