import React,{ Component } from 'react';

const Hoc = ( Comp ) =>{//参数首字母必须大写，必须要有返回值，在下面使用
    return class banner extends Component{ 
        banner = ()=>{
            return '123'
        }
        render () {
            return (
                <Comp banner={this.banner}></Comp>
            )
        }
    }
}
class A extends Component{
    render () {
        return (
            <div>
                <p> A组件 </p>
                { this.props.banner() }//在下面使用了高阶组件后，这里就可以直接使用里面的方法了
            </div>
        )
    }
}

class A1 extends Component{
    render () {
        console.log(111111);
        return (
            <div>
                <p> A组件 </p>
                //在下面使用了高阶组件后，这里就可以直接使用里面的方法了
            </div>
        )
    }
}

class A2 extends Component{
    render () {
        console.log(22222);
        return (
            <div>
                <p> A组件 </p>
                //在下面使用了高阶组件后，这里就可以直接使用里面的方法了
            </div>
        )
    }
}

class A3 extends Component{
    render () {
        console.log(33333);
        return (
            <div>
                <p> A组件 </p>
                在下面使用了高阶组件后，这里就可以直接使用里面的方法了
                //在下面使用了高阶组件后，这里就可以直接使用里面的方法了
            </div>
        )
    }
}

class B extends Component{
    render () {
        return (
            <div>
                <p> B组件 </p>
                { this.props.banner() }
            </div>
        )
    }
}

const HocA = Hoc(A)
const HocB = Hoc(B)

class First extends Component{
    render () {
        return (
            <div>
                <p> C组件 </p>
                <A1/>
                <A2/>
                <A3/>
                <HocA></HocA>
                <HocB></HocB>
            </div>
        )
    }
}
export default First