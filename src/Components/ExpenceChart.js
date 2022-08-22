import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import ExpenceByMonths from './ExpenceByMonths';

const ExpenceChart = () => {

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const [years, setYears] = useState()

    const [checkMonths, setCheckMonths] = useState()

    const [months, setMonths] = useState()

    const [dataByMonths, setDataByMonth] = useState()

    const [amount, setAmount] = useState()

    const [ finalData, setFinalData ] = useState()

    const getDate = (item) => {

        const ALL_YEAR = []
        const ALL_MONTH = []

        item?.map((element, index) => {
            const finaldate = element.date
            
            const Yy = moment(finaldate, "DD-MM-YYYY").format("YYYY")
            const Mm = moment(finaldate, "DD-MM-YYYY").format("MM")
            if (ALL_YEAR.includes(Yy)) {
                return ""
            } else {
                ALL_YEAR.push(Yy)
            }
            if (ALL_MONTH.includes(Mm)) {
                return ""
            } else {
                ALL_MONTH.push(Mm)
            }
        })
        
        const MONTH = []
        const YEAR = []

        item?.map((element) => {
            
            const MMMM = moment(element.date, "DD-MM-YYYY").format("MM")
            if(!MONTH.includes(MMMM)){
                MONTH.push(MMMM)
            }
            const YYYY = moment(element.date, "DD-MM-YYYY").format("YYYY")
            if(!YEAR.includes(YYYY)){
                YEAR.push(YYYY)
            }
        })

        setYears(ALL_YEAR.sort())
        setCheckMonths(MONTH.sort())
    }

    useEffect(() => {
        getDate(getData)
    }, [getData])

    const OUT_DATA = []
    const ALL_MONTHS = []

    const handleChange = (e) => {

        const FilterData = getData.filter((element, index) => moment(element.date, "DD-MM-YYYY").format("YYYY") === e.target.value)
        
        FilterData.filter((element) => {
            
            const getMonth = moment(element.date, "DD-MM-YYYY").format("MM")
            console.log(getMonth)
            
            if(checkMonths.includes(getMonth)){
                OUT_DATA.push(element)
            }
            
            if (!ALL_MONTHS.includes(moment(element.date, "DD-MM-YYYY").format("MMMM"))) {
                ALL_MONTHS.push(moment(element.date, "DD-MM-YYYY").format("MMMM"))
            }

        })

        console.log(OUT_DATA, "OUTDATA")

        setMonths(ALL_MONTHS)
        console.log(ALL_MONTHS)

        // Set All Data In State
        setDataByMonth(OUT_DATA)

        FUN_MONTH_DATA(OUT_DATA)
    }
    
    

    const FUN_MONTH_DATA = (OUT_DATA) => {
        
        const INITIAL_STATE = [
            {
                month:1,
                data:[],
                amount:[],
                total:0
            },
            {
                month:2,
                data:[],
                amount:[],
                total:0
            },
            {
                month:3,
                data:[],
                amount:[],
                total:0
            },
            {
                month:4,
                data:[],
                amount:[],
                total:0
            },
            {
                month:5,
                data:[],
                amount:[],
                total:0
            },
            {
                month:6,
                data:[],
                amount:[],
                total:0
            },
            {
                month:7,
                data:[],
                amount:[],
                total:0
            },
            {
                month:8,
                data:[],
                amount:[],
                total:0
            },
            {
                month:9,
                data:[],
                amount:[],
                total:0
            },
            {
                month:10,
                data:[],
                amount:[],
                total:0
            },
            {
                month:11,
                data:[],
                amount:[],
                total:0
            },
            {
                month:12,
                data:[],
                amount:[],
                total:0
            },
        ]

        OUT_DATA?.map((data,index) => {
            INITIAL_STATE.map((element) => {
                if(element.month === data.month){
                    element.data.push(data)
                }
            })
        })

        INITIAL_STATE.map((data, index) => {
            const A = data.data.map((element, index) => {
                data.amount.push(eval(element.amount))

                for (let i = 0; i < data.amount.length; i++) {
                    data.total += data.amount[i];
                }
            })
        })

        
        setFinalData(INITIAL_STATE)
        console.log(INITIAL_STATE)

        // function of Amounts
        AMOUNT_VALUE(INITIAL_STATE)
    }

    const AMOUNT_VALUE = (INITIAL_STATE) => {

        const GET_AMOUNT = INITIAL_STATE.map((element) => {
            return element.total
        })

        console.log(GET_AMOUNT)
        // const E = GET_AMOUNT.map((element) => {
        //     const b = eval(element)
        //     return b
        // })

        const b = Math.max(...GET_AMOUNT)
        const c = b + ((b * 20) / 100)
        const FINAL_AMOUNT = []

        for (let i = 0; i < GET_AMOUNT.length; i++) {
            const element = (GET_AMOUNT[i] * 100) / c;
            FINAL_AMOUNT.push(element)
        }

        setAmount(FINAL_AMOUNT)
        console.log(FINAL_AMOUNT)
    }

    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-12 my-5">
                    <select name="GetYear" id="years" className='px-3 py-2 text-dark' onChange={(e) => handleChange(e)}>
                        <option value="Select Year">Select Year</option>
                        {
                            years?.map((element, index) => <option value={element} key={index} name="GetYear" >{element}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="bar-chart">
                        <div className="row">
                            {
                                amount?.map((element, index) =>
                                    <div className="col-1" key={index}>
                                        <div className="progress " style={{ height: "500px", position: "relative" }} >
                                            <div className="real-time-progress bg-dark rounded" style={{ height: `${element}%`, width: "100%", position: "absolute", bottom: "0" }}></div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ExpenceByMonths year={years} month={months} alldata={dataByMonths} />
        </div>
    )
}

export default ExpenceChart