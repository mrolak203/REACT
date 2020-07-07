class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = { isHidden: true};
    }
    
    //when the text is clicked, change the visibility of all components to their inverse 
    clickText(){

    	
    	 this.setState({isHidden : !this.state.isHidden});

    	 var tools = document.getElementsByClassName("tool");
    	
    	 for (let tool of tools){
    	 	tool.hidden = this.state.isHidden;
    	 }



    }

    render() {

	return(

	       <div>
	       <input type="checkbox" className = "tool"  id="boldCheckbox" hidden={true}/>
	       <button id="decreaseButton" className = "tool" hidden={true}>-</button>
	       <span id="fontSizeSpan" className = "tool" hidden={true}>{this.props.size}</span>
	       <button id="increaseButton" className = "tool" hidden={true}>+</button>
	       <span id="textSpan"
					onClick={this.clickText.bind(this)}>{this.props.text} </span>
	       </div>
	);

    }
}

