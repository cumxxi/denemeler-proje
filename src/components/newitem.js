import React from 'react'

class NewsItem extends React.Component {
    render(){        

        const { tittle, description } = this.props;

        console.log(this.props)

        return(
            <div>
                <h1>{ tittle }</h1>
                <p>                  
                  { description }                    
                </p>
            </div>
        )
    }
}

export default NewsItem;