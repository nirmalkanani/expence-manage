import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
import ExpenceByMonths from './ExpenceByMonths';

const ExpenceChart = (props) => {

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const [ GET_ALLDATA, setGET_ALLDATA ] = useState()

    const [years, setYears] = useState()

    const [checkMonths, setCheckMonths] = useState()

    const [months, setMonths] = useState()

    const [dataByMonths, setDataByMonth] = useState()

    const [amount, setAmount] = useState()

    const [finalData, setFinalData] = useState()

    const GET_API_DATA = async() => {

        const response = await axios.get('https://expense-tracker-fbcff-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        const OB_KEYS = Object.keys(response.data)
        const OB_VALUES = Object.values(response.data)

        const ADD = OB_KEYS.map((element, index) => 
            OB_VALUES[index].key = OB_KEYS[index]
        )
        
        setGET_ALLDATA(OB_VALUES)

        const MONTH = []

        const YEAR = []

        OB_VALUES?.map((element) => {

            const MMMM = moment(element.date, "DD-MM-YYYY").format("MM")
            if (!MONTH.includes(MMMM)) {
                MONTH.push(MMMM)
            }
            const YYYY = moment(element.date, "DD-MM-YYYY").format("YYYY")
            if (!YEAR.includes(YYYY)) {
                YEAR.push(YYYY)
            }
        })
        setYears(YEAR.sort())
        setCheckMonths(MONTH.sort())
        GET_API_DATA()
    }

    useEffect(() => {
        (async () => {
            await  GET_API_DATA()
            await CheckFunction()
        })()
        AMOUNT_VALUE(INITIAL_STATE)
    }, [props.proState])

    const OUT_DATA = []
    const ALL_MONTHS = []

    const handleChange = async (e) => {
        await GET_API_DATA()
        const FilterData = GET_ALLDATA?.filter((element) => moment(element.date, "DD-MM-YYYY").format("YYYY") == e?.target?.value)
        FILTER_DATA(FilterData)
    }

    const CheckFunction = () => {
        if(handleChange()){
            const blank = GET_ALLDATA?.filter((element) => moment(element.date, "DD-MM-YYYY").format("YYYY") == new Date().getFullYear())
            console.log(blank)
            FILTER_DATA(blank)
        }
    }

    const FILTER_DATA = (accpetedData) => {
        accpetedData?.filter((element) => {
            const getMonth = moment(element.date, "DD-MM-YYYY").format("MM")
            if (checkMonths.includes(getMonth)) {
                OUT_DATA.push(element)
            }
            if (!ALL_MONTHS.includes(moment(element.date, "DD-MM-YYYY").format("MMMM"))) {
                ALL_MONTHS.push(moment(element.date, "DD-MM-YYYY").format("MMMM"))
            }
        })
        setMonths((ALL_MONTHS).sort())
        setDataByMonth(OUT_DATA)
        FUN_MONTH_DATA(OUT_DATA)
    }

    const INITIAL_STATE = [
        {
            month: 1,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 2,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 3,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 4,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 5,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 6,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 7,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 8,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 9,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 10,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 11,
            data: [],
            amount: [],
            total: 0
        },
        {
            month: 12,
            data: [],
            amount: [],
            total: 0
        },
    ]

    const FUN_MONTH_DATA = (OUT_DATA) => {
        OUT_DATA?.map((data) => {
            INITIAL_STATE.map((element) => {
                if (element.month === data.month) {
                    element.data.push(data)
                }
            })
        })

        INITIAL_STATE.map((data) => {
            const A = data.data.map((element) => {
                data.amount.push(eval(element.amount))

                for (let i = 0; i < data.amount.length; i++) {
                    data.total += data.amount[i];
                }
            })
        })

        AMOUNT_VALUE(INITIAL_STATE)
        setFinalData(INITIAL_STATE)
    }

    // Get Amount Value

    const AMOUNT_VALUE = (INITIAL_STATE) => {
        const GET_AMOUNT = INITIAL_STATE.map((element) => {
            return element.total
        })

        const b = Math.max(...GET_AMOUNT)
        const c = b + ((b * 20) / 100)
        const FINAL_AMOUNT = []

        for (let i = 0; i < GET_AMOUNT.length; i++) {
            const element = (GET_AMOUNT[i] * 100) / c;
            INITIAL_STATE[i].range = eval(element)
            FINAL_AMOUNT.push(element)
        }
        setAmount(FINAL_AMOUNT)
    }



    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-12 my-5">
                    <select name="GetYear" id="years" className='px-3 py-2 text-dark'  onChange={(e) => handleChange(e)}>
                        {
                            years?.map((element, index) => <option defaultValue={new Date().getFullYear()} value={element} key={index} name="GetYear">{element}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="bar-chart border border-2 p-5 border-dark" style={{ borderRadius: "40px" }}>
                <div className="row">
                    {
                        finalData === undefined ? 
                            amount?.map((element, index) =>
                                <div className="col-1 px-1 px-md-4" key={index} >
                                    <div className="progress border border-1 border-dark" style={{ height: "400px", position: "relative" }} >
                                        <div className="real-time-progress bg-dark rounded progress-bar-striped progress-bar-animated shadow" style={{ height: `${element}%`, width: "100%", position: "absolute", bottom: "0" }}>
                                        </div>
                                    </div>
                                </div>
                            ) : finalData?.map((element, index) =>
                            <div className="col-1 px-1 px-md-4" key={index} >
                                <div className="progress border border-1 border-dark" style={{ height: "400px", position: "relative" }} >
                                    <div className="real-time-progress bg-dark rounded progress-bar-striped progress-bar-animated shadow" style={{ height: `${element.range}%`, width: "100%", position: "absolute", bottom: "0" }}>
                                        <h6 className='text-center text-white my-3'>{element.total}</h6>
                                    </div>
                                </div>
                                <h6 className='text-center my-3'>{moment(element.month, "MM").format("MMM")}</h6>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* Months Value Pass From Here Via using Props */}
            <ExpenceByMonths year={years} month={months} alldata={dataByMonths} proData={props.proState}/>
        </div>
    )
}

export default ExpenceChart