import React from 'react';
import NewsItem from './newitem';

export default class News extends React.Component{
    render(){

        const tek = this.props.dizi.map(dizi =>
            <NewsItem 
            key = {dizi.id}
             tittle = { dizi.tittle }
              description = {dizi.description} />)
        
        return(
            <div>
                { tek }
            </div>
        )
    }
}


