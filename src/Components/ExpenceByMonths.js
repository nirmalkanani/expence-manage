import moment from 'moment'
import React, { useEffect, useState } from 'react'

const ExpenceByMonths = (props) => {

    const INITAL_MONTH = {
        month:""
    }

    const [ month, setMonth ] = useState(INITAL_MONTH)
    const [ alldata, setAllData ] = useState()

    const data = () => {

    }

    useEffect(() => {
        data()
    },[])

    const handleChange = (e) =>{
        setMonth({...month, [e.target.name] : e.target.value})
        console.log(month)

        const FilterData = props.alldata.filter((element,index) => moment(element.date,"DD-MM-YYYY").format("MMMM") === e.target.value)
        console.log(FilterData)
        setAllData(FilterData)
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
            <div className="row">
                {
                    alldata?.map((element,index) => 
                        <div className="col-12 my-4" key={index}>
                            <div className="row border border-2 border-dark rounded p-3 align-items-center">
                                <div className="col-3">
                                    <div className="date-box text-center border border-1 border-dark rounded p-3">
                                        <h2 className='text-dark'>{moment(element.date, "DD-MM-YYYY").format("DD")}</h2>
                                        <h4>{ moment(element.date, "DD-MM-YYYY").format("MMMM") }</h4>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="amount-box border border-2 border-dark rounded mb-3 p-2"><h3>{element.amount}</h3></div>
                                    <div className="decription-box border border-2 border-dark rounded  p-2"><h4>{element.description}</h4></div>
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