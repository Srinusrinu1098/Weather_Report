import { Route, Routes,  } from 'react-router-dom'
import Home from './AllWeatherComponents/Home/Home'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App(){
  
  return(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_LOGIN_CLINT_KEY}>
    <Routes>
      <Route exact path ="/" element={<Home/>}/>

    </Routes>
    </GoogleOAuthProvider>

  )

}



export default App
