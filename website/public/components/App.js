class CustomizeItem extends React.Component {  //EL COMPONENTE RECIBE PROPS

    constructor (props) {
        super (props);
        this.state = {
            inicialImage: props.inicialImage,
            resetImage: props.resetImage,
            value: '' , //para el form
    
            changeImageVisor: props.changeImageVisor,
            changeImagePanel: props.changeImagePanel,
            changeImageLogo: props.changeImageLogo,
            changeImageThread: props.changeImageThread,
            changeImageSticker: props.changeImageSticker,
        };
    
        this.handleChange = this.handleChange.bind(this); //para el form
        this.handleSubmit = this.handleSubmit.bind(this); //para el form
    }
    
    handleChange(event) { //para el form
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) { //para el form
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      //VISOR
    
    VisorColorBlack () {
        this.setState ( {changeImageVisor: this.props.VisorColorBlack})
    }
    VisorColorBlue () {
        this.setState ( {changeImageVisor: this.props.VisorColorBlue})
    }
    VisorColorGrey () {
        this.setState ( {changeImageVisor: this.props.VisorColorGrey})
    }
    VisorColorMagenta () {
        this.setState ( {changeImageVisor: this.props.VisorColorMagenta})
    }
    VisorColorPink () {
        this.setState ( {changeImageVisor: this.props.VisorColorPink})
    }
    VisorColorYellow () {
        this.setState ( {changeImageVisor: this.props.VisorColorYellow})
    }
    
    //PANEL
    
    PanelColorBlack () {
        this.setState ( {changeImagePanel: this.props.PanelColorBlack})
    }
    PanelColorBlue () {
        this.setState ( {changeImagePanel: this.props.PanelColorBlue})
    }
    PanelColorGrey () {
        this.setState ( {changeImagePanel: this.props.PanelColorGrey})
    }
    PanelColorMagenta () {
        this.setState ( {changeImagePanel: this.props.PanelColorMagenta})
    }
    PanelColorPink () {
        this.setState ( {changeImagePanel: this.props.PanelColorPink})
    }
    PanelColorYellow () {
        this.setState ( {changeImagePanel: this.props.PanelColorYellow})
    }
    
    //LOGO
    
    LogoCentralBig () {
        this.setState ( {changeImageLogo: this.props.LogoCentralBig})
    }
    LogoCentralSmall () {
        this.setState ( {changeImageLogo: this.props.LogoCentralSmall})
    }
    LogoClean () {
        this.setState ( {changeImageLogo: this.props.LogoClean})
    }
    LogoPanelSide () {
        this.setState ( {changeImageLogo: this.props.LogoPanelSide})
    }
    LogoVisor () {
        this.setState ( {changeImageLogo: this.props.LogoVisor})
    }
    
    //THREAD
    
    ThreadColorBlack () {
        this.setState ( {changeImageThread: this.props.ThreadColorBlack})
    }
    ThreadColorBlue () {
        this.setState ( {changeImageThread: this.props.ThreadColorBlue})
    }
    ThreadColorGrey () {
        this.setState ( {changeImageThread: this.props.ThreadColorGrey})
    }
    ThreadColorMagenta () {
        this.setState ( {changeImageThread: this.props.ThreadColorMagenta})
    }
    ThreadColorPink () {
        this.setState ( {changeImageThread: this.props.ThreadColorPink})
    }
    ThreadColorYellow () {
        this.setState ( {changeImageThread: this.props.ThreadColorYellow})
    }
    
    //STICKER
    
    StickerColorBlack () {
        this.setState ( {changeImageSticker: this.props.StickerColorBlack})
    }
    StickerColorBlue () {
        this.setState ( {changeImageSticker: this.props.StickerColorBlue})
    }
    StickerColorGrey () {
        this.setState ( {changeImageSticker: this.props.StickerColorGrey})
    }
    StickerColorMagenta () {
        this.setState ( {changeImageSticker: this.props.StickerColorMagenta})
    }
    StickerColorPink () {
        this.setState ( {changeImageSticker: this.props.StickerColorPink})
    }
    StickerColorYellow () {
        this.setState ( {changeImageSticker: this.props.StickerColorYellow})
    }
    
    //RESET
    
    resetImage () {
        this.setState ( {resetImage: this.props.resetImage})
    }
    
    render() {                         //ENVUELVO TODO EN RENDER
    return (
        
          <div className= "frame">
              
              
              <div className= "frameLeft">
                <img className = "positionFixed" src ='/images/productImagesCustomize/cap-image-fixed-shadow.png'></img>
                <img className = "positionFixed" src ={this.state.inicialImage}></img>
                <img className = "positionFixed" src ={this.state.changeImageVisor}></img>
                <img className = "positionFixed" src ={this.state.changeImagePanel}></img>
                <img className = "positionFixed" src ={this.state.changeImageLogo}></img>
                <img className = "positionFixed" src ={this.state.changeImageThread}></img>
                <img className = "positionFixed" src ={this.state.changeImageSticker}></img>
              </div>
    
              <div className= "frameRight">
                  <div className = "productDetails">
                    <h4 className = "productDetailTitle">Título</h4>
                    <h4 className = "productDetailPrice">Precio</h4>
                    <h4 className = "productDetailSubtitle">Subtítulo</h4>
                  </div>
                <form onSubmit={this.handleSubmit}>
                    <div className= "container">
                    <div className= "logoContainer">
                    <div className = "labelContainer">
                            <label>Elige el tamaño y posición del Logo</label>
                        </div>
                        <div className="checkmarkLogo"><h4>Centro L</h4>
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoCentralBig() }/>
                        </div>
                        <div className="checkmarkLogo"><h4>Centro M</h4>
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoCentralSmall() }/>
                        </div>
                        <div className="checkmarkLogo"><h4>Sin Logo</h4>
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoClean() }/>
                        </div>
                        <div className="checkmarkLogo"><h4>Lateral</h4>
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoPanelSide() }/>
                        </div>
                        <div className="checkmarkLogo"><h4>Visera</h4>
                            <input type="radio" name= "logo" value={this.state.value} onChange= { () => this.LogoVisor() }/>
                        </div>
                        </div>
                        <div className= "logoContainer">
                            <div className = "labelContainer">
                                <label>Elige un color para la Visera</label>
                        </div>
                            <div className="checkmarkBlack">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorBlack() }/>
                            </div>
                            <div className="checkmarkBlue">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorBlue() }/>
                            </div>
                            <div className="checkmarkGrey">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorGrey() }/>
                            </div>
                            <div className="checkmarkMagenta">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorMagenta() }/>
                            </div>
                            <div className="checkmarkPink">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorPink() }/>
                            </div>
                            <div className="checkmarkYellow">
                                <input type="radio" name= "visor" value={this.state.value} onChange= { () => this.VisorColorYellow() }/>
                            </div>
                            </div>
                        <div className= "logoContainer">
                            <div className = "labelContainer">
                                <label>Elige un color para los Paneles</label>
                            </div>
                            <div className="checkmarkBlack">
                                <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorBlack() }/>
                            </div>
                            <div className="checkmarkBlue">
                                <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorBlue() }/>
                            </div>
                            <div className="checkmarkGrey">
                                <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorGrey() }/>
                            </div>
                            <div className="checkmarkMagenta">
                                <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorMagenta() }/>
                            </div>
                            <div className="checkmarkPink">
                                <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorPink() }/>
                            </div>
                            <div className="checkmarkYellow">
                                <input type="radio" name= "panel" value={this.state.value} onChange= { () => this.PanelColorYellow() }/>
                            </div>
                        </div>
                        
                        <div className= "logoContainer">
                            <div className = "labelContainer">
                                <label>Elige un color para las Costuras</label>
                            </div>
                            <div className="checkmarkBlack">
                                <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorBlack() }/>
                            </div>
                            <div className="checkmarkBlue">
                                <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorBlue() }/>
                            </div>
                            <div className="checkmarkGrey">
                                <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorGrey() }/>
                            </div>
                            <div className="checkmarkMagenta">
                                <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorMagenta() }/>
                            </div>
                            <div className="checkmarkPink">
                                <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorPink() }/>
                            </div>
                            <div className="checkmarkYellow">
                                <input type="radio" name= "thread" value={this.state.value} onChange= { () => this.ThreadColorYellow() }/>
                            </div>
                        </div>
                        <div className= "logoContainer">
                            <div className = "labelContainer">
                                <label>Elige un color para el Sticker</label>
                            </div>
                            <div className="checkmarkBlack">
                                <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorBlack() }/>
                            </div>
                            <div className="checkmarkBlue">
                                <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorBlue() }/>
                            </div>
                            <div className="checkmarkGrey">
                                <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorGrey() }/>
                            </div>
                            <div className="checkmarkMagenta">
                                <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorMagenta() }/>
                            </div>
                            <div className="checkmarkPink">
                                <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorPink() }/>
                            </div>
                            <div className="checkmarkYellow">
                                <input type="radio" name= "sticker" value={this.state.value} onChange= { () => this.StickerColorYellow() }/>
                            </div>
                        </div>
                        
                        <div className= "resetSubmitButtons">
                        <button value={this.state.value} onClick= { () => this.resetImage() }>Reset</button>
                                            
                        <button><input type="submit" value="Submit" /></button>
                        </div>
                    </div>
                </form>
            </div>
    
          </div>
          
      )
    
    }}

//-------------------------------------

function App() {
return (
  <div className="App" style= {{backgroundImage: `url(${"/images/design/imagen_slider_5.jpg"})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    
    <CustomizeItem
    inicialImage= {'/images/productImagesCustomize/cap-image-inicial.png'}
    VisorColorBlack= {'/images/productImagesCustomize/cap-image-visor-color-black.png'}
    VisorColorBlue= {'/images/productImagesCustomize/cap-image-visor-color-blue.png'}
    VisorColorGrey= {'/images/productImagesCustomize/cap-image-visor-color-grey.png'}
    VisorColorMagenta= {'/images/productImagesCustomize/cap-image-visor-color-magenta.png'}
    VisorColorPink= {'/images/productImagesCustomize/cap-image-visor-color-pink.png'}
    VisorColorYellow= {'/images/productImagesCustomize/cap-image-visor-color-yellow.png'}
    
    PanelColorBlack= {'/images/productImagesCustomize/cap-image-panels-color-black.png'}
    PanelColorBlue= {'/images/productImagesCustomize/cap-image-panels-color-blue.png'}
    PanelColorGrey= {'/images/productImagesCustomize/cap-image-panels-color-grey.png'}
    PanelColorMagenta= {'/images/productImagesCustomize/cap-image-panels-color-magenta.png'}
    PanelColorPink= {'/images/productImagesCustomize/cap-image-panels-color-pink.png'}
    PanelColorYellow= {'/images/productImagesCustomize/cap-image-panels-color-yellow.png'}
    
    ThreadColorBlack= {'/images/productImagesCustomize/cap-image-thread-color-black.png'}
    ThreadColorBlue= {'/images/productImagesCustomize/cap-image-thread-color-blue.png'}
    ThreadColorGrey= {'/images/productImagesCustomize/cap-image-thread-color-grey.png'}
    ThreadColorMagenta= {'/images/productImagesCustomize/cap-image-thread-color-magenta.png'}
    ThreadColorPink= {'/images/productImagesCustomize/cap-image-thread-color-pink.png'}
    ThreadColorYellow= {'/images/productImagesCustomize/cap-image-thread-color-yellow.png'}
    
    LogoCentralBig= {'/images/productImagesCustomize/cap-image-logo-central-big.png'}
    LogoCentralSmall= {'/images/productImagesCustomize/cap-image-logo-central-small.png'}
    LogoClean= {'/images/productImagesCustomize/cap-image-logo-clean.png'}
    LogoPanelSide= {'/images/productImagesCustomize/cap-image-logo-panel-side.png'}
    LogoVisor= {'/images/productImagesCustomize/cap-image-logo-visor.png'}
    
    StickerColorBlack= {'/images/productImagesCustomize/cap-image-sticker-color-black.png'}
    StickerColorBlue= {'/images/productImagesCustomize/cap-image-sticker-color-blue.png'}
    StickerColorGrey= {'/images/productImagesCustomize/cap-image-sticker-color-grey.png'}
    StickerColorMagenta= {'/images/productImagesCustomize/cap-image-sticker-color-magenta.png'}
    StickerColorPink= {'/images/productImagesCustomize/cap-image-sticker-color-pink.png'}
    StickerColorYellow= {'/images/productImagesCustomize/cap-image-sticker-color-yellow.png'}

    resetImage= {'/images/productImagesCustomize/cap-image-inicial.png'}
    />
  </div>
);
}

const domContainer = document.querySelector('#reactApp');
ReactDOM.render(App(), domContainer);