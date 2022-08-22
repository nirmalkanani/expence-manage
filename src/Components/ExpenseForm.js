import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SENDDATA, SENDALLDATA } from '../Redux/Actions/Action'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { toast } from 'react-toastify'

const ExpenseForm = () => {

    const INITIAL_STATE = {
        description: "",
        amount: "",
        date: "",
        month: ""
    }

    const [data, setData] = useState(INITIAL_STATE)

    const [dateDetail, setDateDetail] = useState()

    const { description, amount, date } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const dispatch = useDispatch()

    const DATE = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY")
    const MONTH = moment(date, "YYYY-MM-DD").format("MM")

    const handleSubmit = (e) => {

        const CheckData = description && amount && date

        if (!CheckData) {
            toast.error("Please Fill Data")
        } else if (!/[0-9]/g.test(amount)) {
            toast.error("Please Eter Only Numbers")
        } else {
            dispatch(SENDALLDATA(JSON.stringify({ ...data, date: DATE, month: parseInt(MONTH) })))
            setData(INITIAL_STATE)
        }
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='text-center my-3'>Expence Tracker</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-section border border-2 border-dark p-3" style={{ borderRadius:"20px" }}>
                        <form action="#" method='post' onSubmit={(e) => handleSubmit(e)}>
                            <div className="row">
                                <div className="input-gropu-section col-12 my-3">
                                    <TextField
                                        type="text"
                                        id="outlined-error"
                                        label="Expenece Description"
                                        name="description"
                                        value={description}
                                        onChange={(e) => handleChange(e)}
                                        className='w-100 rounded'
                                        autoComplete='off'
                                    />
                                </div>
                                <div className="input-gropu-section col-12 col-md-3 my-3">
                                    <TextField
                                        type="text"
                                        id="outlined-error"
                                        label="Amount"
                                        name="amount"
                                        value={amount}
                                        onChange={(e) => handleChange(e)}
                                        className='rounded  w-100 '
                                        autoComplete='off'
                                    />
                                </div>
                                <div className="input-gropu-section col-12 col-md-4  my-3">
                                    <input type="date" className='w-100 w-md-75  p-3 rounded' onChange={(e) => handleChange(e)} name="date" value={date} />
                                </div>
                                <div className="input-gropu-section col-12 col-md-5 my-3  text-md-end">
                                    <input type="submit" className='w-100 w-md-50 p-3 rounded btn btn-primary' value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseForm
