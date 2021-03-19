import React, { Component } from 'react'
import {Button} from 'antd'
import axios from 'axios'
import HeaderComponent from '/@/components/header'
export default class NewPage extends Component{
    componentDidMount(){
        // axios.post('https://www.baidu.com')
    }
    render(){
        return (
            <div>
                <HeaderComponent/>
                <Button type='primary'>antd 按钮</Button>
            </div>
        )
    }
}