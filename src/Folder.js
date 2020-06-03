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
                  <h1>Home &#x1F4C1;</h1>
                  <ul className="files">
                      <li>File 1 &#x1F4C4;</li>
                      <li>File 2 &#x1F4C4;</li>
                      <li>File 3 &#x1F4C4;</li>
                  </ul>
                    <div>
                    { <button
                        onClick={() => {this.disappearFiles()}}
                    >TOGGLE</button>}
                    
                    </div>
                </div>:
             <div>
             <h1>Home &#x1F4C1;</h1>                  
               <div>                    
               { <button
                   onClick={() => {this.disappearFiles()}}
               >TOGGLE</button>}
               </div>
           </div>
       
        }
  
}

export default Folder;