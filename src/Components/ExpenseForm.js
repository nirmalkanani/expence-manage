import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SENDDATA } from '../Redux/Actions/Action'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { toast } from 'react-toastify'

const ExpenseForm = () => {

    const INITIAL_STATE = {
        description: "",
        amount: "",
        date: ""
    }

    const [data, setData] = useState(INITIAL_STATE)

    const [ dateDetail, setDateDetail ] = useState()

    const { description, amount, date } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const getData = useSelector((state) => state.dataReducer.expencesData)

    const dispatch = useDispatch()

    const DATE = moment(date, "YYYY-MM-DD").format("DD-MM-YYYY")

    const handleSubmit = (e) => {

        const CheckData = description && amount && date

        if(!CheckData){
            toast.error("Please Fill Data")
        } else{
            dispatch(SENDDATA({...data, date:DATE}))
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
                    <div className="form-section ">
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
                                    />
                                </div>
                                <div className="input-gropu-section col-3 my-3">
                                    <TextField
                                        type="text"
                                        id="outlined-error"
                                        label="Amount"
                                        name="amount"
                                        value={amount}
                                        onChange={(e) => handleChange(e)}
                                        className='rounded'
                                    />
                                </div>
                                <div className="input-gropu-section col-4 my-3">
                                    <input type="date" className='w-75 p-3 rounded' onChange={(e) => handleChange(e)} name="date" value={date} />
                                </div>
                                <div className="input-gropu-section col-5 my-3 text-end">
                                    <input type="submit" className=' w-50 p-3 rounded' />
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
