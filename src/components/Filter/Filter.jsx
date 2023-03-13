import React from "react";
import css from '../Filter/Filter.module.css'


const Filter = ({value, onChange}) =>{
    return(
         <label htmlFor="name">Find contacts by name
        <input name="name" type="text"
        onChange={onChange} value={value}
        className={css.input}                
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
        />
    </label>
    )
   
}

// class Filter extends Component {
//     state = { 
//         filter: '',
//      } 
//      changeFilter = e => {
//         console.log(e)
//         this.setState({filter:e.currentTarget.value})
//      }

//     render() { 
//         return (

//             <label htmlFor="name">Find contacts by name
//             <input
//                 //className={css.formInput}
//                 name="name"
//                 type="text"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 required
//                 onChange={this.changeFilter}
//                  value={this.state.filter}
//                 />
//                 </label>
//         );
//     }
// }
 
export default Filter;