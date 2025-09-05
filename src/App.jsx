import { useState, useEffect } from 'react'


import { Html5QrcodeScanner } from 'html5-qrcode'
function App() {

  const [scanResult, setScanResult] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10, // reasonable frame rate for webcams
      qrbox: { width: 250, height: 250 }, // slightly smaller box for typical webcam view
      aspectRatio: 1.333, // 4:3 aspect ratio matches most webcams
      
    }, false);

    
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