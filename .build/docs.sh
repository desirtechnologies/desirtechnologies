
function with() {
    $1
}


function concat() {
  cat $1 $2 > $3
}


function generateDocs() {
    with concat
}