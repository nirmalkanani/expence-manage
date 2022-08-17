import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const ExpenceChart = () => {

    const getData = useSelector((state) => state.dataReducer.expencesData)
    // console.log(getData[1]?.date.split('-'))

    const [ getRedux, setGetRedux ] = useState(getData)

    const INITIAL_DATE = {
        year:"",
        month:"",
        date:""
    }

    const [ initial, setInitial ] = useState(INITIAL_DATE)

    const free =[]

    const All = (data) => {
        const filterData = data?.map((element,index) => {
          return console.log(element)

        })
        for(let i=0; i < data?.length; i++ ){
            // console.log(data)
            const a = data[i].date.split('-')
            free.push(a)
        }
        console.log(initial)

        // const CD = free.filter((year) => year === )
    }

    useEffect(() => {
        console.log(getRedux)
        All(getData)
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <select name="years" id="years" className='px-3 py-2 text-dark'>
                        {
                            
                        }
                        <option value="1"> Select Year </option>
                        <option value="2">{}</option>
                        <option value="3"></option>
                        <option value="4"></option>
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