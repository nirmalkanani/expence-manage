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

    const [amount, setAmount] = useState()

    const [ dbyMonth, setDbyMonth ] = useState([])

    const [ dataFil, setDataFil ] = useState({
        month:"",
    })

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

        const DATE_MONTH = item?.map((element) => {

            // const finaldate = element.date
            
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
        console.log(MONTH)
        console.log(YEAR)
        console.log(getData)
    }

    useEffect(() => {
        getDate(getData)
    }, [getData])

    const OUT_DATA = []
    const ALL_MONTHS = []

    const handleChange = (e) => {

        const FilterData = getData.filter((element, index) => moment(element.date, "DD-MM-YYYY").format("YYYY") === e.target.value)

        const FilterMonth = FilterData.filter((element) => {

            const getMonth = moment(element.date, "DD-MM-YYYY").format("MM")
            console.log(getMonth)
            
            if(checkMonths.includes(getMonth)){
                OUT_DATA.push(element)
            }

            if (!ALL_MONTHS.includes(moment(element.date, "DD-MM-YYYY").format("MMMM"))) {
                ALL_MONTHS.push(moment(element.date, "DD-MM-YYYY").format("MMMM"))
            }

        })

        const DATA =  OUT_DATA.map((element,index) => {
            setDataFil({...dataFil, month:moment(element.date, "DD-MM-YYYY").format("MMMM")})
            dbyMonth.push(dataFil)
        })
        console.log(DATA)
        console.log(dbyMonth, "dby")
        
        

        console.log(dataFil,"Final OB")

        console.log(OUT_DATA)
        
        console.log(ALL_MONTHS)
        setMonths(ALL_MONTHS)

        // Set All Data In State
        setDataByMonth(OUT_DATA)

        // function of Amounts
        AMOUNT_VALUE(OUT_DATA)
    }
    
    const AMOUNT_VALUE = (OUT_DATA) => {

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