var core = 0
var currentdate = 0

function StringArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '

  }
}

function printquote() {
var ran = 60/quote.length

currentdate = new Date()
core = currentdate.getSeconds()
adcore = Math.floor(core/ran)
core = adcore

var thequote = quote[core]
var theauthor = author[core]
var thebreak = ' - '
var theq = '"'
var theend = '.'
document.write(theq + thequote + theq + thebreak + theauthor + theend)
}