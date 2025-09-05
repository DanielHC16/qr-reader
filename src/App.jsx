import { useState, useEffect } from 'react'


import { Html5QrcodeScanner } from 'html5-qrcode'
function App() {

  const [scanResult, setScanResult] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 300,
        height: 300,
      },
      fps: 10,
    });

  scanner.render(success, error);

  function success(result){
    scanner.clear();
    setScanResult(result);
  }

  function error(){
    console.log(err);
    }
  }, []);

  

  return (
    <div className="App">
      <h1>QR Scanning using React</h1>
      { scanResult
        ?<div>Success: <a href={"http://"+scanResult}>{scanResult}</a></div>
        :<div></div>
      }
      <div id="reader"></div>
    </div>
  )
}

export default App
