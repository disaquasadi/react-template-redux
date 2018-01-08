import React from 'react'
import {connect} from 'react-redux'
import {addStudent, deleteStudent, fetchStudent} from './main.js'

class Greeting extends React.Component{
    constructor(){
        super()
        this.state={name: '', count: 0}
    }
    componentDidMount(){
        this.props.dispatch(fetchStudent())
    }
    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    handleSave(c){
        c = c + 1
        this.setState({count: c})
        this.props.dispatch(addStudent(this.state))
    }
    handleDelete(_id){
        if(confirm("Sure?")){
        this.props.dispatch({
            type: 'DELETE_STUDENT',
            payload: _id
        })
        this.props.dispatch(deleteStudent(_id))
        }
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>this.handleSave(this.state.count)}>Geet</button>
                        </td>
                    </tr>
                </table>
                {this.props.students.map((i)=>
                <div>
                    Name:{i.name}
                    ||Count:{i.count}
                    ||<button onClick={()=>this.handleDelete(i._id)}>Delete</button>  
                </div>
                )}
            </div>

        )
    }
}

function mapStateToProps(centralState){
    return {
        students: centralState.students
    }
}
export default connect(mapStateToProps)(Greeting)