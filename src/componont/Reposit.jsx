import React,{Component} from "react";
import axios from "axios";
import Result from "./Result";




class Reposit extends Component {
    constructor() {
        super();
        this.state =({
            links:[]

        })
    }
    componentDidMount(){
        axios.get('http://api.github.com/users/Farzadmadad/repos?client_id=16eddae83e413e367e1d&client_secret=c5c994294b96457a951630460347b0bc01cffb24&sort=created')
        .then((response) =>{
            this.setState({
                links:response.data
                
                
            })
           
            
        })
        
    }
    render() { 
        return (  
            
            <div>
                <div>
                <h2>Repositories</h2>
                </div>
                {
                    <ol>
                       {
                           this.state.links.map((repos, index) => {
                               return(
                                   <div key={index}>
                                       <Result qoute={repos} index={index}/>

                                   </div>
                                
                               )
                           })
                       }

                    </ol>
                }
               

            </div>
            
        );
    }
}
 
export default Reposit;