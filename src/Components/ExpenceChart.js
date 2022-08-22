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

    const getDate = (item) => {
        
        const MONTH = []
        const YEAR = []

        item?.map((element) => {

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
    }

    useEffect(() => {
        getDate(getData)
    }, [getData])

    const OUT_DATA = []
    const ALL_MONTHS = []


    // HandleChange event 
    
    const handleChange = (e) => {

        const FilterData = getData.filter((element) => moment(element.date, "DD-MM-YYYY").format("YYYY") === e.target.value)

        FilterData.filter((element) => {

            const getMonth = moment(element.date, "DD-MM-YYYY").format("MM")

            if (checkMonths.includes(getMonth)) {
                OUT_DATA.push(element)
            }

            if (!ALL_MONTHS.includes(moment(element.date, "DD-MM-YYYY").format("MMMM"))) {
                ALL_MONTHS.push(moment(element.date, "DD-MM-YYYY").format("MMMM"))
            }
            
        })

        setMonths(ALL_MONTHS)

        // Set All Data In State
        setDataByMonth(OUT_DATA)

        FUN_MONTH_DATA(OUT_DATA)
    }



    const FUN_MONTH_DATA = (OUT_DATA) => {

        // INITIAL STATE FOR NEW STORE DATA

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

        // function of Amounts
        AMOUNT_VALUE(INITIAL_STATE)
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
            FINAL_AMOUNT.push(element)
        }

        setAmount(FINAL_AMOUNT)
    }

    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-12 my-5">
                    <select name="GetYear" id="years" className='px-3 py-2 text-dark' onChange={(e) => handleChange(e)}>
                        <option value={years}>Select Year</option>
                        {
                            years?.map((element, index) => <option value={element} key={index} name="GetYear">{element}</option>)
                        }
                    </select>
                </div>
            </div>
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

            {/* Months Value Pass From Here Via using Props */}
            <ExpenceByMonths year={years} month={months} alldata={dataByMonths} />
        </div>
    )
}

export default ExpenceChart