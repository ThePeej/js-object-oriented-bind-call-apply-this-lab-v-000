function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  return fn().call(bob)
}

function setThisWithApply(fn, thisValue, args) {

}

function returnNewFunctionOf(functionToBeCopied, thisValue) {

}
