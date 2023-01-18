import { StyledFrame } from "@/lib/styles"
import { useState, useRef, useEffect } from "react"
import Button from "./Button"
import Modal from "./Modal"
import { useModal } from "@/lib/hooks"

const Body = {
  id: '',
  name: '',
  email: '',
  region: '',
  password: '',
  password2: '',
}
const Valid = {
  id: 99,
  name: 99,
  email: 99,
  region: 99,
  password: 99,
  password2: 99,
}
// state: 미입력 -1, 비유효 0, 유효 1
const Data = {
  Valid: {
    id: {
      invalid: "10자 이상 입력해주세요",
      void: "ID를 입력해주세요",
      check: (v) => !v ? -1 : v.length > 9 ? 1 : 0
    },
    name: {
      invalid: "10자 이상 입력해주세요",
      void: "ID를 입력해주세요",
      check: (v) => !v ? -1 : v.length > 9 ? 1 : 0
    },
    email: {
      invalid: "10자 이상 입력해주세요",
      void: "ID를 입력해주세요",
      check: (v) => !v ? -1 : v.length > 9 ? 1 : 0
    },
    region: {
      invalid: "10자 이상 입력해주세요",
      void: "ID를 입력해주세요",
      check: (v) => !v ? -1 : v.length > 9 ? 1 : 0
    },
    password: {
      invalid: "10자 이상 입력해주세요",
      void: "ID를 입력해주세요",
      check: (v) => !v ? -1 : v.length > 9 ? 1 : 0
    },
    password2: {
      invalid: "10자 이상 입력해주세요",
      void: "ID를 입력해주세요",
      check(v, w){ return !w ? -1 : v === w ? 1 : 0 }
    },
  }
}
function RenderInValid({name, state}){
  let msg
  if(state === 0) msg = Data.Valid[name].invalid
  else if(state === -1) msg = Data.Valid[name].void
  else msg = null
  return msg ? <p>{msg}</p> : null
}
function InputForm(){
  const body = useRef(Body) // 불필요한 리랜더링을 막기 위해 ref를 사용
  const [valid, setValid] = useState({...Valid})
  const [isOpened, openModal, closeModal] = useModal()
  const [emailSent, setEmailSent] = useState(false)

  function onChange(e){
    const name = e.target.name
    if(!name) return console.log("onChange: wrong name")
    body.current[name] = e.target.value
  }
  function onCheck(e){
    alert("ID 중복체크")
  }
  function onAuth(e){
    openModal()
    setEmailSent(prev => true)
  }
  function onSubmit(e){
    e.preventDefault()
    // 각 input.value 값에 따라 유효성 검사
    for (let key in body.current){
      const v = body.current[key]
      let state
      if(key === "password2"){
        const w = body.current["password"]
        state = Data.Valid[key].check(v, w)
      }else{
        state = Data.Valid[key].check(v)
      }
      setValid(prev => ({...prev, [key]: state}))
    }
    alert("가입")
  }
  function onKeyDown(e){
    // input enter시 submit 방지
    if(e.keyCode === 13) e.preventDefault()
  }
  function onAuthChange(e){
    console.log(e.target.value)
  }

  return (
    <StyledFrame.InputForm onSubmit={onSubmit}>
      <sub>
        <label>
          <span>ID</span>
          <input className="userauth-inputform-input" type="text" onChange={onChange} onKeyDown={onKeyDown} placeholder="Kim Amuke" name="id"/>
          <RenderInValid name="id" state={valid.id}/>
        </label>
        <button type="button" onClick={onCheck}>중복체크</button>
      </sub>
      <label>
        <span>이름</span>
        <input className="userauth-inputform-input" type="text" onChange={onChange} onKeyDown={onKeyDown} placeholder="Kim Amuke" name="name"/>
        <RenderInValid name="id" state={valid.name}/>
      </label>
      <sub>
        <label>
          <span>이메일</span>
          <input className="userauth-inputform-input" type="email" onChange={onChange} onKeyDown={onKeyDown} placeholder="Amuke@gmail.com" name="email"/>
          <RenderInValid name="id" state={valid.email}/>
        </label>
        <button type="button" onClick={onAuth}>인증</button>
      </sub>
      {emailSent && (
        <sub className="auth-code">
          <label>
            <span>인증코드</span>
            <div>
              <input type="text" onChange={onAuthChange} onKeyDown={onKeyDown} placeholder="1" name="auth/1"/>
              <input type="text" onChange={onAuthChange} onKeyDown={onKeyDown} placeholder="2" name="auth/2"/>
              <input type="text" onChange={onAuthChange} onKeyDown={onKeyDown} placeholder="3" name="auth/3"/>
              <input type="text" onChange={onAuthChange} onKeyDown={onKeyDown} placeholder="4" name="auth/4"/>
              <input type="text" onChange={onAuthChange} onKeyDown={onKeyDown} placeholder="5" name="auth/5"/>
              <input type="text" onChange={onAuthChange} onKeyDown={onKeyDown} placeholder="6" name="auth/6"/>
            </div>
            <RenderInValid name="id" state={valid.region}/>
          </label>
        </sub>
      )}
      <label>
        <span>국가</span>
        <input className="userauth-inputform-input" type="text" onChange={onChange} onKeyDown={onKeyDown} placeholder="Singapore" name="region"/>
        <RenderInValid name="id" state={valid.region}/>
      </label>
      <label>
        <span>패스워드</span>
        <input className="userauth-inputform-input" type="password" onChange={onChange} onKeyDown={onKeyDown} placeholder="10자 이상 입력해주세요" name="password"/>
        <RenderInValid name="id" state={valid.password}/>
      </label>
      <label>
        <span>패스워드 확인</span>
        <input className="userauth-inputform-input" type="password" onChange={onChange} placeholder="10자 이상 입력해주세요" name="password2"/>
        <RenderInValid name="id" state={valid.password2}/>
      </label>
      <div><Button.Main type="submit">가입</Button.Main></div>
      
      {isOpened && <Modal.EmailAuth closeModal={closeModal}/>}
    </StyledFrame.InputForm>
  )
}

export default {
  InputForm
}