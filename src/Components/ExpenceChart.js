import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import ExpenceByMonths from './ExpenceByMonths';

const ExpenceChart = () => {

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const [year, setYears] = useState()

    const [checkMonths, setCheckMonths] = useState()

    const [months, setMonths] = useState()

    const [dataByMonths, setDataByMonth] = useState()

    const [getValue, setGetValue] = useState({
        GetYear: ""
    })
    // const [ recieveData, setRecieveData ] = useState([])

    const [total, setTotal] = useState()

    const [amount, setAmount] = useState()

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
        setYears(ALL_YEAR.sort())
        setCheckMonths(ALL_MONTH.sort())
    }

    useEffect(() => {
        getDate(getData)
    }, [getData])

    const OUT_DATA = []
    const ALL_MONTHS = []

    const handleChange = (e) => {
        setGetValue({ ...getValue, [e.target.name]: e.target.value })

        const FilterData = getData.filter((element, index) => moment(element.date, "DD-MM-YYYY").format("YYYY") === e.target.value)

        const FilterMonth = FilterData.filter((element) => {
            checkMonths.includes(moment(element.date, "DD-MM-YYYY").format("MM"))
            OUT_DATA.push(element)
            if (ALL_MONTHS.includes(moment(element.date, "DD-MM-YYYY").format("MMMM"))) {
                return ""
            } else {
                ALL_MONTHS.push(moment(element.date, "DD-MM-YYYY").format("MMMM"))
            }
        })
        setMonths(ALL_MONTHS)
        setDataByMonth(OUT_DATA)
        

        AMOUNT_VALUE(OUT_DATA)
    }

    const AMOUNT_VALUE = () => {

        const GET_AMOUNT = OUT_DATA.map((element) => {
            return element.amount
        })

        const E = GET_AMOUNT.map((element) => {
            const b = eval(element)
            return b
        })

        const b = Math.max(...E)
        const c = b + ((b * 20) / 100)
        const FINAL_AMOUNT = []

        for (let i = 0; i < E.length; i++) {
            const element = (E[i] * 100) / c;
            FINAL_AMOUNT.push(element)
        }

        setAmount(FINAL_AMOUNT)
    }

    return (
        <div className="container">
            <div className="row text-end">
                <div className="col-12 my-5">
                    <select name="GetYear" id="years" className='px-3 py-2 text-dark' onChange={(e) => handleChange(e)}>
                        <option value="Select Year">Select Year</option>
                        {
                            year?.map((element, index) => <option value={element} key={index} name="GetYear" >{element}</option>)
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
            <ExpenceByMonths year={year} month={months} alldata={dataByMonths} />
        </div>
    )
}

export default ExpenceChart

