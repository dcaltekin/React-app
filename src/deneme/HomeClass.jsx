import React, { Component } from 'react'



class Home extends Component{
    
    render(){
        const {title,fiyat,adress,salary} = this.props;
    return(
        <>
        <div className="text-center">
            <h1>{title}</h1>
        </div>
        <div className="XS">
            {fiyat}   

        </div>
        <hr />
        <div>
            <ul>
                <li className='text-center'>İsim-Soyisim : {title} </li>
               
                <li>Maaş : {salary} </li>
                <li>Adres : {adress}</li>
            </ul>

            
        </div>
        </>
    
    );
    }

}


export default Home;