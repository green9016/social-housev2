import { FC } from 'react';
import Router from './Router';
import { PaperSDKProvider } from '@paperxyz/react-client-sdk'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
const App: FC = () => {
  return (
    <PaperSDKProvider appName='Social House'>
      <Router />
    </PaperSDKProvider>
  )
}

export default App;
