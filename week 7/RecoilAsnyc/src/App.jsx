import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { footerAtom, footerSelector } from './store/atoms/footer'

function App() {
  return(
    <>
      <RecoilRoot>
        <Footer></Footer>
      </RecoilRoot>
    </>
  )
}

function Footer(){
  const network=useRecoilValue(footerAtom);
  const total=useRecoilValue(footerSelector);
  return (
    <>
      <button>Home</button>
      <button>Network ({network.network})</button>
      <button>Job ({network.jobs})</button>
      <button>Messaging ({network.messaging})</button>
      <button>Notification ({network.notifications})</button>
      <button>Me ({total})</button>
    </>
  )
}

export default App
