import { StyledInput } from "../lib/styles"; 
import { useEffect, useRef, useState } from "react";


const Data = {
  inputForm: [
    {
      label: "이름",
      input: { type: "text", name: "name", placeholder: "name" },
      valid: {
        state: -1,
        fail: "이름은 2자 이상이어야 합니다",
        check: (v) => "0123456789".includes(v),
        update: null,
        render(setState){this.update = (state) => setState(state)}
      }
    },
    {
      label: "이메일",
      input: { type: "email", name: "email", placeholder: "email" },
      valid: {
        state: -1,
        fail: "이메일 형식이 아닙니다",
        check: (v) => "0123456789".includes(v),
        update: null,
        render(setState){this.update = (state) => setState(state)}
      }
    },
    {
      label: "휴대폰",
      input: { type: "number", name: "phone", placeholder: "phone" },
      valid: {
        state: -1,
        fail: "휴대폰 형식이 아닙니다",
        check: (v) => "0123456789".includes(v),
        update: null,
        render(setState){this.update = (state) => setState(state)}
      }
    },
  ]
}
const Body = Data.inputForm.reduce((obj, cur) => {
  obj[cur.input.name] = ''
  return obj
}, {})

// label: string | undefined
// input: {type, name, onChange}
// valid: {state: -1, 0, 1, check: regex, fail: string | undefined}
function Input({data: {label, input, valid}}){

  const [state, setState] = useState(-1)

  useEffect(() => {
    valid.render(setState)
  }, [valid.render, state])

  function onKeyDown(e){
    if(e.keyCode !== 13) return
    const label = e.target.parentElement
    const nextElement = label.nextElementSibling
    const nextName = nextElement?.nodeName
    if(!nextElement || !nextName) return
    // input 옆에 button이 있으면 클릭
    const inputButton = [...nextElement.children].find(v => v.nodeName === "BUTTON")
    inputButton?.click()
    // 다다음 형제 태그가 label 이면 focus, button 이면 click
    const nextNextElement = nextElement.nextElementSibling
    if(nextNextElement.nodeName === "LABEL"){
      const nextInput = [...nextNextElement.children].find(v => v.nodeName === "INPUT")
      return nextInput.focus()
    }
    if(nextNextElement.nodeName === "DIV"){
      const submitButton = [...nextNextElement.children].find(v => v.nodeName === "BUTTON")
      return submitButton.click()
    }
  }

  return (
    <StyledInput.InputLabel className="input-form-label">
      {label && <span>{label}</span>}
      <input {...input} onKeyDown={onKeyDown}/>
      {valid?.state === 0 && <span>{valid.fail}</span>}
    </StyledInput.InputLabel>
  )
}

function InputForm({data}){
  const body = useRef(Body)

  function onChange(e){
    const {name, value} = e.target
    // value 할당
    body.current[name] = value
    // 유효성 검사
    const form = Data.inputForm.find(v => v.input.name === name)
    const valid = form.valid
    if(!value) form.valid.state = -1
    else if(valid.check(value)) form.valid.state = 1
    else form.valid.state = 0
    form.valid.update(form.valid.state)
  }

  Data.inputForm.forEach(v => v.input.onChange = onChange)

  function onSubmit(e){
    e.preventDefault()
    alert(JSON.stringify(body.current))
  }

  return (
    <div className="input-form-container">
      <Input data={Data.inputForm[0]}/>
      <div></div>
      <Input data={Data.inputForm[1]}/>
      <div><button onClick={onSubmit}>확인</button></div>
      <Input data={Data.inputForm[2]}/>
      <div></div>
      <div><button onClick={onSubmit}>등록</button></div>
    </div>  
  )
}
// function InputForm(){
//   console.log("InputForm.props.data: ")
//   const body = useRef({...data})
  
//   function onChange(e){
//     const {name, value} = e.target
//     body.current[name] = value
//   }

//   function onKeyDown(e){
//     console.log(e)
//     if(!e.keyCode === 13) return
//     console.log("enter!")
//   }

//   function onSubmit(e){
//     e.preventDefault()
//   }

//   return(
//     <StyledFrame.InputForm onSubmit={onSubmit}>
      
//       <sub>
//         <button type="submit">등록</button>
//       </sub>
//     </StyledFrame.InputForm>
//   )
// }

export default {
  InputForm
}