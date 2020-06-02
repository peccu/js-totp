export default function(copyText, successCB){
  if(!successCB){
    successCB = function(text){
      alert('The text is on the clipboard, try to paste it!\nCopied:\n\n'+text)
    }
  }
  if(window.clipboardData){
    window.clipboardData.setData('Text',copyText)
    return
  }
  var tmpElem = window.document.createElement('div')
  tmpElem.style.position = 'absolute'
  tmpElem.style.left = tmpElem.style.top = '-1000px'
  tmpElem.innerText = copyText
  window.document.body.appendChild(tmpElem)
  console.log('elm', tmpElem)

  var range = window.document.createRange()
  range.selectNodeContents(tmpElem)
  console.log('range', range)

  var selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
  console.log('selection', selection)

  var success = true
  try{
    success = window.document.execCommand('copy',false,null)
  }catch(e){
    window.copyToClipboardFF(copyText)
  }
  if(success){
    successCB(copyText)
  }else{
    prompt('something failed in copy', copyText)
  }
  tmpElem.remove()
}
