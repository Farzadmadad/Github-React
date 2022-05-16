import axios from 'axios'
import React,{Component} from 'react'
import Reposit from './Reposit'

class Git extends Component {
    constructor() {
        super()
        this.state = { 
            picture:'',
            fullname: '',
            username: '',
            location:'',
            EmailAdress:''
            

         }
    }
    
   
    componentDidMount  = () =>{
        axios.get('http://api.github.com/users/Farzadmadad?client_id=16eddae83e413e367e1d&client_secret=c5c994294b96457a951630460347b0bc01cffb24&sort=created')
        .then((response) => {
          
   
            this.setState({
                picture: response.data.avatar_url,
                fullname: response.data.name,
                username: response.data.login,
                location: response.data.location,
                EmailAdress: response.data.email
                
            })
            
         
        })
        
        
        
    }
   
    render() { 
       
        return ( 
            <div className='counteiner'>
                <div className='div1'>
                  <div>
                     <img src={this.state.picture} alt="hi" />
                  </div>
                  <div className='list'>
                    <p>Fullname : {this.state.fullname}</p>
                    <p>Username : {this.state.username}</p>
                    <p>Location : {this.state.location}</p>
                    <p>EmailAdress : {this.state.EmailAdress}</p>
                  </div>
                </div>
                
                    <div className='Reposit'>
                       <Reposit/>
                    </div>
            </div>

         );
    }
}
 
export default Git;