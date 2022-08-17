import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const ExpenceChart = () => {

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const [ getRedux, setGetRedux ] = useState(getData)

    const [ year, setYears ] = useState()

    const getDate = (item) => {

        const ALL_YEAR = []

        for (let i = 0; i < item?.length; i++) {
            const element = item[i];
            const finaldate = element.date
            const a = moment(finaldate, "DD-MM-YYYY").format("YYYY")
            return ALL_YEAR.push(a)
        }
        console.log(ALL_YEAR)
        setYears(ALL_YEAR)
    }

    useEffect(() => {
        getDate(getData)
    },[getData])

    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-12 my-5">
                    <select name="years" id="years" className='px-3 py-2 text-dark'>
                        <option value="Select">Select Year</option>
                        {
                            year?.map((element,index)=> <option value={element} key={index}>{element}</option>)
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