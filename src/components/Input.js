import {useState, useEffect} from 'react'
import {StyledInput} from '../lib/styles'

// label: string | undefined
// input: {type, name, onChange}
// valid: {state: -1, 0, 1, check: regex, fail: string | undefined}
function Main({data: {label, input, valid}}){
  const [state, setState] = useState(-1)
  console.log("child: Input: ", state)

  useEffect(() => {
    valid.update = setState
  }, [])

  function onKeyDown(e){
    // input.focus 상태에서, enter 키 입력시, button.click 또는 다음 input.focus 실행하는 로직
    if(e.keyCode !== 13) return
    // input 태그의 부모 태그인 label 태그, 이의 다음 형제 태그 할당
    const label = e.target.parentElement
    if(label.nodeName !== "LABEL") return console.log("input.parentElement is not label")
    const nextElement = label.nextElementSibling
    if(!nextElement || !nextElement?.nodeName) return console.log("wrong nextElement")
    // label 태그 다음, input과 관련된 button이 있으면 클릭
    const inputButton = [...nextElement.children].find(v => v.nodeName === "BUTTON")
    inputButton?.click()
    // label 태그 다다음 태그가 label이면 input.focus, div면 button.click
    const nextNextElement = nextElement.nextElementSibling
    if(!nextNextElement || !nextNextElement?.nodeName) return console.log("wrong nextNextElement")
    if(nextNextElement.nodeName === "LABEL"){
      const nextInput = [...nextNextElement.children].find(v => v.nodeName === "INPUT")
      return nextInput ? nextInput.focus() : console.log('wrong nextInput')
    }
    if(nextNextElement.nodeName === "DIV"){
      const submitButton = [...nextNextElement.children].find(v => v.nodeName === "BUTTON")
      return submitButton ? submitButton.focus() : console.log('wrong submitButton')
    }
  }

  return (
    <StyledInput.InputLabel className="input-form-label">
      {label && <span>{label}</span>}
      <input {...input} onKeyDown={onKeyDown}/>
      {valid?.state === 0 && (<span>{valid.fail}</span>)}
    </StyledInput.InputLabel>
  )
}

export default {
  Main
}