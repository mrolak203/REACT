class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = { isHidden: true, bold: !this.props.bold, 
							
									size: this.props.size
	};
    }
    
    //when the text is clicked, change the visibility of all components to their inverse 
    clickText(){

    	 this.setState({isHidden : !this.state.isHidden});

    	 var tools = document.getElementsByClassName("tool");
    	
    	 for (let tool of tools){
    	 	tool.hidden = this.state.isHidden;
    	 }
    }

    //when the checkbox is clicked, the fontWeight changes from bold or becomes normal
    clickCheckBox(){

    	this.setState({bold: !this.state.bold});

    }

    //when the plus button is clicked, the font size increases
    clickPlus(){

    	if(this.state.size <= this.props.max){

    		this.setState({size: Number(this.state.size) + 1});

    	}

    }

    //when the minus button is clicked, the font size decreases
    clickMinus(){

    	if(this.state.size >= this.props.min){

    		this.setState({size: Number(this.state.size) - 1});
    	}

    }


    render() {

    		var weight = this.state.bold ? 'bold' : 'normal';


	return(

	       <div>
	       <input type="checkbox" className = "tool"  id="boldCheckbox" hidden={true}
	        onClick={this.clickCheckBox.bind(this)}/>
	       <button id="decreaseButton" className = "tool" hidden={true}
	       onClick={this.clickMinus.bind(this)}
	       >-</button>
	       <span id="fontSizeSpan" className = "tool" hidden={true}>{this.state.size}</span>
	       <button id="increaseButton" className = "tool" hidden={true} 
	       onClick={this.clickPlus.bind(this)}>+</button>
	       <span id="textSpan" style = {{ fontWeight: weight, fontSize: this.state.size }}
					onClick={this.clickText.bind(this)}>{this.props.text} </span>
	       </div>
	);

    }
}

