// import React from 'react'
// import Hello from './Hello.jsx'
// import {connect} from 'react-redux'
// import {addStudent} from './main.js'
// class App extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//              name: "Initasdfsdf "
//         }
//     }
//     handleChange(e){
//         var change = {}
//         change[e.target.name] = e.target.value
//         this.setState(change)
//     }
//     add(){
//         this.props.dispatch(addStudent({
//             name: this.state.name,
//             age: this.state.age
//         }))
//     }
//     handleDelete(name){
//         if(confirm('Do you want to delete?')){
//             this.props.dispatch({type: 'DELETE_STUDENT', 
//             payload: name })  
//         }
//     }
//     render(){
//         return(
//         <div>
//         <input type="text" name='name' value={this.state.name} 
//             onChange={this.handleChange.bind(this)}
//         />
//         <input type="text" name='age' value={this.state.age} 
//             onChange={this.handleChange.bind(this)}
//         />
//         <button onClick={this.add.bind(this)}>Add a student</button>

//           {this.props.students.map((s)=>
//                 <li>
//                        {s.name} {s.age} 
//                        | <a onClick={()=>this.handleDelete(s.name)}>Delete</a>
//                   </li>
              
//         )}
//         </div>
//         )
//     }
// }
// function mapStateToProps(centralState){
//     return {
//         students: centralState.students
//     }
// }
// export default connect(mapStateToProps)(App)