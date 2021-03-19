import React, { Component } from 'react'
function Hoc(Com){
    return class HocComponent extends Component{
        render(){
            return (
                <Com></Com>
            )
        }
    }
}
export default Hoc