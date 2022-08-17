import { width } from '@mui/system';
import React from 'react';

const ExpenceChart = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="bar-chart">
                        <div className="row">
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"250px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"200px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"300px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"20px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"263px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"80px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"60px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"450px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"350px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"100px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"110px", width:"100%", position:"absolute", bottom:"0"}}></div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="progress " style={{ height:"500px", position:"relative" }}>
                                    <div className="real-time-progress bg-dark" style={{ height:"250px", width:"100%", position:"absolute", bottom:"0"}}></div>
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
