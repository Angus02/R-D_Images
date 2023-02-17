import React from "react";
import Open from './OpenAi';
import { Button } from '../Button'
import './HomePage.css'
import ThreeGraphics from "./ThreejsScene";

function Home() {


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
                        <Pick />
                </div>
            </div>
        </div>
    )

}

export default Home;