import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { DELETE } from '../Redux/Actions/Action'
import { useDispatch } from 'react-redux'

const ExpenceByMonths = (props) => {
    
    const [ alldata, setAllData ] = useState()  

    const [ objKeys, setObjKeys ] = useState()

    const [ objValues, setObjValues ] = useState()
    
    const GETDATA = async () => {
        const response = await axios.get('https://expense-tracker-fbcff-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        const OB_KEYS = Object.keys(response.data)
        setObjKeys(OB_KEYS)
        const OB_VALUES = Object.values(response.data)
        setObjValues(OB_VALUES)

        const ADD = OB_KEYS.map((element, index) => 
            OB_VALUES[index].key = OB_KEYS[index]
        )

        // console.log(OB_VALUES)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        GETDATA()
    },[])

    const handleChange = (e) =>{   

        const FilterData = props.alldata.filter((element,index) => moment(element.date,"DD-MM-YYYY").format("MMMM") === e.target.value)
        setAllData(FilterData)
    }

    const handleDelete = (key) => {
        console.log(key)
        // dispatch(DELETE(key))
    }
    
    const handleEdit = (key)=> {
        console.log(key)
        
    }

    return (
        <>
            <div className='row text-end'>
                <div className="col-12 my-5">
                    <select name="month" id="month" className='px-3 py-2 text-dark' onChange={(e) => handleChange(e)}>
                    <option value="Select Month" >Select Month</option>
                        {
                            props.month?.map((element, index) => <option value={element} key={index} name="GetMonth" >{element}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="row border border-2 border-dark p-4">
                {
                    alldata?.map((element,index) => 
                        <div className="col-12 my-4" key={index}>
                            <div className="row border border-2 border-dark rounded p-3 align-items-center">
                                <div className="col-md-3">
                                    <div className="date-box text-center border border-1 border-dark rounded p-3">
                                        <h2 className='text-dark'>{moment(element.date, "DD-MM-YYYY").format("DD")}</h2>
                                        <h4>{ moment(element.date, "DD-MM-YYYY").format("MMMM") }</h4>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="amount-box border border-2 border-dark rounded mb-3 p-2"><h3>{element.amount}</h3></div>
                                    <div className="decription-box border border-2 border-dark rounded  p-2"><h4>{element.description}</h4></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-end">
                                    <button className="btn btn-success py-2 px-3 m-3" onClick={(e) => handleEdit(element.key)}>EDIT</button>
                                    <button className="btn btn-danger py-2 px-3 m-3" onClick={(e) => handleDelete(element.key)}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ExpenceByMonths