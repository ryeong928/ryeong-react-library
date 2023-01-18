import { validate } from "./lib/utils";
import Routes from "./Routes";
import {StyledPages} from './lib/styles'


function App() {
  const res1 = validate.test("email", "")
  const res4 = validate.test("phone", "")
  console.log(validate.msg.email[res1])
  console.log(validate.msg.phone[res4])
  return (
    <StyledPages.Home>
      <Routes />
    </StyledPages.Home>
  );
}

export default App;
