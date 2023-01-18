

const Regexes = {
  // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리
  ps1: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
  // 숫자와 문자 포함 형태의 6~12자리
  ps2:  /^[A-Za-z0-9]{6,12}$/,
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  phone: /^\d{2,3}-\d{3,4}-\d{4}$/,
}

export const msg = {
  email: [
    "이메일을 입력해주세요",
    "사용 가능한 이메일입니다",
    "이메일 형식이 아닙니다"
  ],
  phone: [
    "전화번호를 입력해주세요",
    "사용 가능한 전화번호입니다",
    "전화번호 형식이 아닙니다"
  ],
  password: [
    "비밀번호를 입력해주세요",
    "사용 가능한 비밀번호입니다",
    "6자 이상 입력해주세요",
    "비밀번호 형식이 아닙니다"
  ]
}

export function test(regexName, value){
  try{
    if(!regexName) throw new Error("regexText: no regexName")
    if(!value) return 0
    const regex = Regexes[regexName]
    if(!regex) throw new Error("regexTest: wrong regex")
    const result = regex?.test(value)
    return result ? 1 : 2
  }catch(e){
    console.error(e.message)
    return -1
  }
}