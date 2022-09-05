import React, { useState,useEffect } from 'react'
const PaginationButtonsList = (props) => {
    const noOfPages = 20;
    let buttonsArr=[];
    function createButtons()
    {
        
        for(let i=0;i<noOfPages;i++)
        {
            buttonsArr.push(<button id={'button-'+(i+1)} value={i+1} onClick={buttonClick}>{i+1}</button>);
            
        }
        return buttonsArr;
    }

    const btn1 = document.getElementById("button-1");
    const [btnClicked,setClicked] = useState(false);
    if(btn1!=null ) {
        if(!btnClicked) {
            btn1.classList.add("active-btn");
        }
        if(btnClicked) {
            btn1.classList.remove("active-btn");
        }
 
        }
        
        useEffect(()=>{
            document.getElementById("button-1").classList("active-btn");
        },[])

    function buttonClick(e)
    {
        setClicked(true)
        const redButtons = document.querySelectorAll('.active-btn');
        redButtons.forEach((button)=>{
            button.classList.remove('active-btn');
        })
        
        const button = document.getElementById('button-'+e.target.value);
        button.classList.add('active-btn');
        props.handleChange(e);
    }
    return (
        <div className="pagination-buttons-list">
            {createButtons()}
           
           
        </div>
    )
}

export { PaginationButtonsList }
