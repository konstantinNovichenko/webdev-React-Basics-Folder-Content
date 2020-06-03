import React, {Component} from 'react';
import './App.css';

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showFiles: true
        }
    }

    disappearFiles() {
        if(this.state.showFiles)
        {
            this.setState({
                showFiles: false
            });
        }
        else{
            this.setState({
                showFiles: true
            });
        }
        
       }

    render(){        
        return this.state.showFiles?
        <div>
                  <h1 class = "App">Home &#x1F4C1;</h1>
                  <div className="file-holder">
                    <ul className="files">
                        <li>Krabby Patty Secret Formula &#x1F4C4;</li>
                        <li>Kung Fu Panda Secret Ingredient &#x1F4C4;</li>
                        <li>Missing Number &#x1F4C4;</li>
                    </ul>
                  </div>
                  
                    <div>
                    { <button class="btn btn-success"
                        onClick={() => {this.disappearFiles()}}
                    >Toggle</button>}
                    
                    </div>
                </div>:
             <div>
             <h1 class = "App">Home &#x1F4C1;</h1>                  
               <div>                    
               { <button class="btn btn-success"
                   onClick={() => {this.disappearFiles()}}
               >Toggle</button>}
               </div>
           </div>       
        }  
}

export default Folder;

