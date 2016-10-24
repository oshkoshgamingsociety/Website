function StringArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '

  }
}

function outputone (n) {
	var place = address[n]
	var titl = title[n]
	var tbreak = '">'
	var begin = '&#149;&nbsp;<font size="1"><a href="'
	var end = '</a></font><br>'
	document.write(begin + place + tbreak + titl + end)
}

function output (n) {
	for (var j=0; j<n; j++) {
		outputone (j)
	}
}