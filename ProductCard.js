import React, { Component } from 'react'


class ProductCard extends Component{

    render(){
       console.log("ProductCard: I'm Rendering")
        return(
            <div style={s.a}>
                <div style={s.b}>
                    <div style={s.c}>
                        <span style={s.d}>
                            {this.props.title}
                         </span>
                         <div style={s.e}>
                            <span style={s.f}>
                                {this.props.button}
                            </span>
                        </div>
                        <div style={Object.assign(s.g,{backgroundColor:this.props.isAvailable ? 'green' :'lightgrey'})} onClick={ ()=>this.handleAddToCart(this.props.title,this.props.isAvailable) }>
                            <span style={s.h}>
                                { this.props.isAvailable ? "Add to Cart" : "Out of Stock" }
                            </span>
                        </div>
                    </div>    
                </div>    
            </div>
        )
    }
    handleAddToCart(product,isAvailable){
        //debugger
        if(isAvailable){
           this.props.handleAddtoCart(product)
        }
    }
}

ProductCard.propTypes = {
    title:React.PropTypes.string.isRequired,
    button:React.PropTypes.string,
    isAvailable: React.PropTypes.bool.isRequired
}

ProductCard.defaultProps = {
    //title: "Title is Missing",
    button: "ButtonText is missing" 
}