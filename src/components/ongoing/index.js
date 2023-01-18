import { StyledPage } from "@/lib/styles";
import Layout from "@/components/Layout";
import Constants from "@/lib/Constants";
import Button from "@/components/Button";
import Frame from '@/components/Frame'
import { Line } from "@/lib/styles/styled/common";
import { useState } from "react";
import theme from "@/lib/styles/theme";


const Data = {
  inputForm: [
    {}
  ]
}
export default function SignupPage(props){
  const [snsAcount, setSnsAcount] = useState(false) // SNS 계정 정보

  return(
    <StyledPage.Signup>
      <main>
        <section>
          {Constants.SNS.list.map(sns => <Button.SNS key={sns} sns={sns} setAccount={setSnsAcount} />)}
        </section>

        <section><Line mt={50} mb={50} /></section>

        <section>
          {snsAcount && (
            <div>
              <span>{snsAcount.sns}의{`  `}</span>
              <strong>{snsAcount.email}</strong>
              <span>{`  `}계정과 연동되어 있습니다</span>
            </div>
          )}
        </section>

        <section>
          <Frame.InputForm data={Data.inputForm}/>
        </section>
      </main>
    </StyledPage.Signup>
  )
}

SignupPage.getLayout = (page) => <Layout.UserAuth>{page}</Layout.UserAuth>