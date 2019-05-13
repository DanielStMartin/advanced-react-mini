import React, { Component } from 'react'
import axios from "axios"

export default class DataFetcher extends Component{
    constructor(){
        super();
        this.state={
            data:null
        }
    }
    fetchMaData=()=>{
        axios.get(this.props.url).then(res=>{
            console.log('res within daataFetch', res)
            this.setState({
                data: res.data.cards
            })
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.data ?
                    this.props.renderDemPokemon(this.state.data)
                    :
                    this.fetchMaData()
                }
            </div>
        )
    }
}