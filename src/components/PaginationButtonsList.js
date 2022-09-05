import React, { useEffect }  from 'react'
const PaginationButtonsList = (props) => {
    // const[pageNum,setPageNum] = useState(1)
    const noOfPages = 20            /*to calculate pages => (posts/limit) like here 100/5*/
    function createButtons () {
        let buttonArr = [];
        for(let i=0; i<noOfPages; i++) {
            buttonArr.push(<button key={"btn"+i} id={'button-'+(i+1)} value={i+1} onClick={clickButton}>{i+1}</button>)         
            /*we are creating button here we can use createElement as well*/
        }
        return buttonArr;
    }
    useEffect(()=>{
        document.getElementById("button-1").classList.add("active-btn")
    },[])
    
    function clickButton (event) {
        let redButtons = document.querySelectorAll('.active-btn');
        redButtons.forEach((button)=>{
            button.classList.remove('active-btn');
        })
        let button = document.getElementById('button-'+event.target.value);
        button.classList.add('active-btn');
        props.handleChange(event);
    }
    return (
        <div className="pagination-buttons-list">
        {createButtons()}
        </div>
    )
}

export { PaginationButtonsList }
