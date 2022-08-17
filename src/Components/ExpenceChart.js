import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const ExpenceChart = () => {

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const [ year, setYears ] = useState()
    const [ months, setMonths ] = useState()

    const [ getValue, setGetValue ] = useState({
        GetYear:""
    })

    // const [ recieveData, setRecieveData ] = useState([])

    const getDate = (item) => {

        const ALL_YEAR = []
        const ALL_MONTH = []
        
        item?.map((element,index) => {
            const finaldate = element.date
            const Yy = moment(finaldate, "DD-MM-YYYY").format("YYYY")
            const Mm = moment(finaldate, "DD-MM-YYYY").format("MM")
            console.log(Mm)
            if(ALL_YEAR.includes(Yy) && ALL_MONTH.includes(Mm)){
                return console.log("True")
            } else{
                ALL_YEAR.push(Yy)
                ALL_MONTH.push(Mm)
            }
        })
        setYears(ALL_YEAR)
        setMonths(ALL_MONTH)
    }

    useEffect(() => {
        getDate(getData)
    },[getData])

    const handleChange = (e) => {
        setGetValue({...getValue, [e.target.name]: e.target.value })
        console.log(getValue)
        const FilterData = getData.filter((element,index) => moment(element.date,"DD-MM-YYYY").format("YYYY") === e.target.value)
        console.log(FilterData)
    }

    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-12 my-5">
                    <select name="GetYear" id="years" className='px-3 py-2 text-dark' onChange={(e)=> handleChange(e)}>
                        <option value="Select Year">Select Year</option>
                        {
                            year?.map((element,index)=> <option value={element} key={index} name="GetYear" >{element}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="bar-chart">
                        <div className="row">
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "250px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "200px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "300px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "20px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "263px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "80px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "60px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "450px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "350px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "100px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "110px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height: "500px", position: "relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height: "250px", width: "100%", position: "absolute", bottom: "0" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenceChart