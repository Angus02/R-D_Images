import React, { useState, useEffect } from "react";
import Open from './OpenAi';
import { Button } from '../Button'
import './HomePage.css'
import ThreeGraphics from "./ThreejsScene";
import { getCurrentWalletConnected, connectWallet } from "../interact";

function Home() {

    const [walletAddress, setWallet] = useState("");
    const [button, setButton] = useState(true);

    const connectWalletPressed = async () => { //TODO: implement
        const walletResponse = await connectWallet();
    };

    const showButton = () => {
        if(window.innerWidth <= 350) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    function Install() {
        if(typeof window.ethereum !== 'undefined') {
          return "Connect Wallet"
        } else {
          return (
            <p href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Install MetaMask</p>
          )
        }
    }

    useEffect(() => { //TODO: implement

        async function fetchData() {
          const {address, status} = await getCurrentWalletConnected();
          setWallet(address);
        }
    
        fetchData();
    }, []);



    class Combined extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showComponentBase: true,
            showComponentCanvas:false,
            showComponentApi:false
        };
          this._onButtonClickBase = this._onButtonClickBase.bind(this);
          this._onButtonClickCanvas = this._onButtonClickCanvas.bind(this);
          this._onButtonClickApi = this._onButtonClickApi.bind(this);

        }
      
        _onButtonClickBase() {
            this.setState({
                showComponentBase: true,
                showComponentCanvas: false,
                showComponentApi: false
            });
        }

        _onButtonClickCanvas() {
            this.setState({
                showComponentBase: false,
                showComponentCanvas: true,
                showComponentApi: false
            });
        }

        _onButtonClickApi() {
            this.setState({
                showComponentBase: false,
                showComponentCanvas: false,
                showComponentApi: true
            });
        }
      
        render() {

            if(this.state.showComponentBase)
            {
                return (
                <div >
                    <>
                        <>
                            <div  className='centreLeft'>
                                <div className='centreLeft'> 
                                    <div>
                                        <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClickCanvas} >Canvas</Button>
                                    </div>
                                
                                    {/* <div className='dashIMGTrans'>
                                        <LoadImage />
                                    </div> */}
                                </div>
                            </div>
                        </>
                        <>
                        <div  className='centreRight'>
                            <div className='centreRight'>
                                <div>
                                    <Button buttonStyle='btn--outline' buttonSize={'btn--large'} onClick={this._onButtonClickApi} >Open Ai</Button>
                                </div>
                            
                                {/* <div className='dashIMGTrans'>
                                    <LoadImage />
                                </div> */}
                            </div>
                        </div>
                        </>
                    </>
                    :
                    null  
                </div>
                );
            }

            if(this.state.showComponentCanvas)
            {
                return (
                    <>
                    
                    <div>

                        <>
                        <div className='centeredTop'>
                        <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClickBase}>Back</Button>
                        </div>
                        
                        <ThreeGraphics /> 
                        </> 
                    </div>
                    
                    </>
                )
            }

            if(this.state.showComponentApi)
            {
                return (
                    <>
                    
                    <div>

                        <>
                        <div className='centeredTop'>
                        <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClickBase}>Back</Button>
                        </div>
                        
                            <Open /> 
                        </> 
                    </div>
                    
                    </>
                )
            }
        }
        
    }

    class Pick extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            showComponent: false,
          };
          this._onButtonClick = this._onButtonClick.bind(this);
        }
      
        _onButtonClick() {

            if(this.state.showComponent == false)
            {
                this.setState({
                    showComponent: true,
                });
            }
            
            if(this.state.showComponent == true)
            {
                this.setState({
                    showComponent: false,
                });
            }
        }
      
        render() {
          return (
            <div >

                    {this.state.showComponent ?
                    
                        <div >
                            <Combined />
                        </div>
                        :
                        <div className='centered'>
                            <Button buttonStyle='btn--outline' buttonSize={'btn--large'}  onClick={this._onButtonClick}>Load</Button> 
                        </div>

                    }
            </div>
          );
        }
    }
    

    return (
        <div className='fill'>

            <div className='containerGeese'>

                <div className='containerBlackFill'>
                    <div className='connectBtn'>
                        <p>
                            {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium' onClick={connectWalletPressed}>
                            {walletAddress.length > 0 ? (
                            "Connected: " +
                            String(walletAddress).substring(0, 4) +
                            "..." +
                            String(walletAddress).substring(38)
                            ) : (
                            Install()
                            )}</Button>}
                        </p>
                    </div>


                    <Pick />
                </div>
            </div>
        </div>
    )

}

export default Home;