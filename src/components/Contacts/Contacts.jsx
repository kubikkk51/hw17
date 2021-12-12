import { useState } from 'react';
import Contact from './Contact';
import ReactDOM from "react-dom";
import './StylesContacts.css';

const contacts = [{
    firstName: "Sumail  ",
    lastName: "Hassan",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Topias  ",
    lastName: "Taavitsainen",
    phone: "+380931460123",
    gender: "male"
}, {
    firstName: "Sébastien  ",
    lastName: "Debs",
    phone: "+380666666666",
    gender: "female"
    
}, {
    firstName: "Martin  ",
    lastName: "Sazdov",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Johan  ",
    lastName: "Sundstein",
    phone: "+380739432123",
    gender: "male"
},];
function Contacts() {
    const [ value, setValue] = useState('');
    const filteredContacts = contacts.filter( contact => {
        return contact.lastName.toLowerCase().includes(value.toLowerCase())
         
    })
    
    return ( <div className= "wrapper">
        <form>
            <input
               type = "text" 
               placeholder = "Search Surname"
               onChange = {(e) => setValue(e.target.value)}
               >
                
            </input>
        </form>
    
    <div className = "content">
        {
            filteredContacts.map((contacts) => <Contact contact={contacts}/>
            )
        } 
        
    </div>
    </div>
        )
  }
  
ReactDOM.render(<Contacts/>, document.getElementById('root'));

export default Contacts;