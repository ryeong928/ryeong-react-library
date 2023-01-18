import { useEffect, useRef, useState } from "react";
import Input from './Input'

const Data = {
  inputForm: [
    {
      label: "ID",
      input: { name: "id", type: "text", placeholder: "Kim Amuke" },
      valid: {
        state: -1,
        fail: "ID는 3자 이상이어야 합니다",
        check: (v) => v?.length > 2 ? true : false,
        update: () => {},
      }
    },
    {
      label: "이름",
      input: { name: "name", type: "text", placeholder: "Kim Amuke" },
      valid: {
        state: -1,
        fail: "이름은 3자 이상이어야 합니다",
        check: (v) => v?.length > 2 ? true : false,
        update: () => {},
      }
    },
    {
      label: "이메일",
      input: { name: "email", type: "email", placeholder: "Amuke@gmail.com" },
      valid: {
        state: -1,
        fail: "이메일 형식이 아닙니다",
        check: (v) => "@".includes(v),
        update: () => {},
      }
    },
    {
      label: "국가",
      input: { name: "region", type: "text", placeholder: "Singapore" },
      valid: {
        state: -1,
        fail: "국가 입력을 필수입니다",
        check: (v) => "@".includes(v),
        update: () => {},
      }
    },
    {
      label: "패스워드",
      input: { name: "password", type: "password", placeholder: "10자 이상 입력해주세요" },
      valid: {
        state: -1,
        fail: "10자 이상 입력해주세요",
        check: (v) => v?.length > 9 ? true : false,
        update: () => {},
      }
    },
    {
      label: "패스워드 확인",
      input: { name: "password", type: "password", placeholder: "다시 한번 입력해주세요" },
      valid: {
        state: -1,
        fail: "10자 이상 입력해주세요",
        check: (ps) => (ps[0] && ps[1] && ps[0] === ps[1]) ? true : false,
        update: () => {},
      }
    },
  ]
}
const Body = Data.inputForm.reduce((obj, cur) => {
  obj[cur.input.name] = ''
  return obj
}, {})

function InputForm({data}){
  console.log("parent: InputForm")
  const body = useRef(Body)

  let timer = {...Body}
  function onChange(e){
    const {name, value} = e.target
    body.current[name] = value
    // debounced input.value valid check
    timer[name] && clearTimeout(timer[name])
    timer[name] = setTimeout(() => {
      const form = Data.inputForm.find(v => v.input.name === name)
      const valid = form.valid
      if(!value) form.valid.state = -1
      else if(valid.check(value)) form.valid.state = 1
      else form.valid.state = 0
      form.valid.update(form.valid.state)
    }, 500)
  }

  Data.inputForm.forEach(v => v.input.onChange = onChange)

  function checkId(e){
    const id = body.current
    alert(`id: ${id}`)
  }

  function checkId(e){
    const {id} = body.current
    alert(`id: ${id}`)
  }

  function checkEmail(e){
    const {email} = body.current
    alert(`email: ${email}`)
  }

  function onSubmit(e){
    e.preventDefault()
    alert(JSON.stringify(body.current))
  }

  return (
    <div className="input-form-container">
      <Input.Main data={Data.inputForm[0]}/>
      <div><button onClick={checkId}>중복체크</button></div>
      <Input.Main data={Data.inputForm[1]}/>
      <div></div>
      <Input.Main data={Data.inputForm[2]}/>
      <div><button onClick={checkEmail}>인증</button></div>
      <Input.Main data={Data.inputForm[3]}/>
      <div></div>
      <Input.Main data={Data.inputForm[4]}/>
      <div></div>
      <Input.Main data={Data.inputForm[5]}/>
      <div></div>
      <div><button onClick={onSubmit}>가입</button></div>
    </div>  
  )
}

export default {
  InputForm
}