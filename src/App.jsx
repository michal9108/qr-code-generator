import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  
  const [url, setUrl] = useState('')
	const [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
    width: 800,
    margin:1  
    },(err, url) => {
      if(err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="App">
     <h1>QR Generator Code</h1>
     <input type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(evt) => setUrl(evt.target.value)}
            /> 
          
      <button onClick={GenerateQRCode}> Generate QR Code</button>

{/* If there is a source - if qrcode exists display img */}

      {qrcode && <> 
      <img src={qrcode} alt="QR Code" />

      <a href={qrcode} download="qrcode.png"><button>Download QR Code</button></a> 
      </>}

    </div>
  )
}

export default App
