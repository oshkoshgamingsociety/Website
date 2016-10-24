function StringArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '

  }
}

function outputoneg (n) {
	var place = gaddress[n]
	var titl = gtitle[n]
	var tbreak = '">'
	var begin = '<font color="white">&#149;<font size="2">&nbsp;<a href="'
	var ubreak = '</a><br></font><i><font size="1">'
	var times = when[n]
	var end = '</font></i></font><br>'
	document.write(begin + place + tbreak + titl + ubreak + times + end)
}

function outputgames (n) {
	for (var j=0; j<n; j++) {
		outputoneg (j)
	}
}