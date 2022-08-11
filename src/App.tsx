import {useEffect, useState} from 'react'
import reactLogo from './assets/favicon.jpg'
import './App.css'

function App() {
    const [count, setCount] = useState(10)
    const [show, setShow] = useState(false)
    const [rotate, setRotate] = useState(0)

    // useEffect(()=>{
    //     if (rotate !== 0) {
    //         setTimeout(()=>{
    //             setRotate(0)
    //         }, 500)
    //     }
    // },[rotate])

    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    <img className="logo" src={reactLogo} alt="logo"/>
                </div>
            </div>
            <h2>{ !show ? '关闭' : '打开'}</h2>
            <div className="card">
                <div className="card-container" style={{
                    transform: `rotate(${rotate}deg)`
                }}>
                    <div className="card-content">
                        <div className="background" style={{
                            left: count + 'px',
                        }}></div>
                        <div className="button">
                            <div className={`left ${show ? 'active' : ''}`} onClick={()=>{
                                setShow(true)
                                setCount(10)
                                setRotate(-0)
                            }}>打开</div>
                            <div className={`left ${!show ? 'active' : ''}`} onClick={() => {
                                setShow(false)
                                setCount(155)
                                setRotate(360)
                            }}>关闭
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://ditu.amap.com/"title="高德地图" allow="payment" style={{
                height: '50vh',
                width: '90vw',
                // display: !show ? 'none' : 'block'
                display: 'none'
            }}>
            </iframe>
        </div>
    )
}

export default App
