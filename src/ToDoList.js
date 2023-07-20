import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoList() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity() {
        setListData((listData) =>{
            const updatedList = [...listData, activity]
            console.log(updatedList);
            setActivity("")
            return updatedList;
        })
    }

         
    function removeActivity(i){
            const updatedListData = listData.filter((element, id) => {
                return i!=id;
            })
            setListData(updatedListData);
    }

    function removeAll(){
        setListData([])
    }
    return (
        <>
        <div className='  mx-auto justify-content-center align-items-center bd-highlight mb-3'>
            <div className='mt-5'>TODO LIST</div>
            <input className='px-5' type="text" placeholder='Add Activity' value={activity}
             onChange={(e) => setActivity(e.target.value)} />
             <button className='btn btn-primary ml-5 '  onClick={addActivity}>Add</button>
             {listData !=[] && listData.map((data, i) => {
                return (
                    <>
                    <p key={i}>
                        <div>{data}</div>
                        <button className='btn btn-outline-dark' onClick={() => removeActivity(i)}>Remove</button>
                    </p>
                    </>
                )
             })}
             {listData.length >= 1 &&
              <button className='btn btn-outline-dark' onClick={ removeAll}>Remove All</button> }
             
        </div>
        </>
    );
}

export default ToDoList;