import React from 'react';
import axios from 'axios';

function myHOC(Component, url){
    return class extends React.Component{
        constructor(){
            super();
            this.state={
                data:null
            }
        }
        getData = () => {
            axios.get(url).then(res => {
               console.log('DATA in MYHOC', res)
                this.setState({
                    data:res.data.cards
                })
            })
        }
        render(){
            return(
                <div>
                    {
                        this.state.data ?
                        <Component {...this.props} data={this.state.data}/>
                        :
                        this.getData()
                    }
                </div>
            )
        }
    }
}
export default myHOC