import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { DELETE, EDITDATA } from '../Redux/Actions/Action'
import { useDispatch } from 'react-redux'

const ExpenceByMonths = (props) => {

    const [alldata, setAllData] = useState()

    const [editData, setEditData] = useState({
        amount: '',
        description: ''
    })

    const [display, setDisplay] = useState(false)

    const GETDATA = async () => {
        const response = await axios.get('https://expense-tracker-fbcff-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        const OB_KEYS = Object.keys(response.data)
        const OB_VALUES = Object.values(response.data)

        const ADD = OB_KEYS.map((element, index) =>
            OB_VALUES[index].key = OB_KEYS[index]
        )
        await GETDATA()
    }

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await GETDATA()
            await CheckFun()
        })()
    }, [props.proState])

    const handleChange = (e) => {
        const FilterData = props.alldata?.filter((element) => moment(element.date, "DD-MM-YYYY").format("MMMM") === e?.target?.value)
        setAllData(FilterData)
    }

    const CheckFun = () => {
        if(!handleChange()){
            const Data = props.alldata?.filter((element) => moment(element.date, "DD-MM-YYYY").format("MMMM") == moment().format("MMMM"))
            setAllData(Data)
        }
    }

    // const handleDelete =  (e, key) => {
    //     dispatch(DELETE(key))
    //     handleChange({ target: { value : editData} })
    //     GETDATA()
    // }

    const deleteData = async (key) => {
        dispatch(DELETE(key))
        handleChange({ target: { value : editData} })
         GETDATA()
    }

    const handleEditData = (e, key) => {
        const UP_DATA = props.alldata.find((element) => element.key === key)
        setEditData(UP_DATA)
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }

    const handleEdit = async (key) => {
        setDisplay(true)
    }

    const handleEditBtn = async (e,key) => {
        setDisplay(false)
        const UPDATE_DATA = props.alldata.find((element) => element.key === key)
        const DataKey = UPDATE_DATA.key
        if (editData.amount == '') {
            editData.amount = UPDATE_DATA.amount
        } else {
            UPDATE_DATA.amount = editData.amount
        }
        if (editData.description == '') {
            editData.description = UPDATE_DATA.description
        } else {
            UPDATE_DATA.description = editData.description
        }
        dispatch(EDITDATA(UPDATE_DATA, DataKey))
        await GETDATA()
    }

    return (
        <>
            <div className='row text-end'>
                <div className="col-12 my-5">
                    <select name="month" id="month" className='px-3 py-2 text-dark' onChange={(e) => handleChange(e)}>
                        {
                            props.month?.map((element, index) => <option defaultValue={new Date().getMonth()} value={element} key={index} name="GetMonth" >{element}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="row border border-2 border-dark p-4">
                {
                    alldata?.map((element, index) =>
                        <div className="col-12 my-4" key={index}>
                            <div className="row border border-2 border-dark rounded p-3 align-items-center">
                                <div className="col-md-3">
                                    <div className="date-box text-center border border-1 border-dark rounded p-3">
                                        <h2 className='text-dark'>{moment(element.date, "DD-MM-YYYY").format("DD")}</h2>
                                        <h4>{moment(element.date, "DD-MM-YYYY").format("MMMM")}</h4>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    {
                                        !display ? <>
                                            <div className="amount-box border border-2 border-dark rounded mb-3 p-2"><h3>{element.amount}</h3></div>
                                            <div className="amount-box border border-2 border-dark rounded mb-3 p-2"><h3>{element.description}</h3></div>
                                        </> :
                                            <form >
                                                <div className="row align-items-center">
                                                    <div className="col-10">
                                                        <div>
                                                            <input type='text' className="amount-box border border-2 border-dark rounded mb-3 p-2 w-100" name='amount' defaultValue={element.amount} value={element.value} onChange={(e) => handleEditData(e, element.key)} />
                                                        </div>
                                                        <div>
                                                            <input type='text' className="decription-box border border-2 border-dark rounded  p-2 w-100" name='description' defaultValue={element.description} onChange={(e) => handleEditData(e, element.key)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2 text-end">
                                                        <button className='btn btn-primary px-3 py-2' onClick={(e) => handleEditBtn(e, element.key)}> Save </button>
                                                    </div>
                                                </div>
                                            </form>
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-end">
                                    <button className="btn btn-success py-2 px-3 m-3" onClick={(e) => handleEdit(element.key)}>EDIT</button>
                                    <button className="btn btn-danger py-2 px-3 m-3" onClick={(e) => deleteData(element.key)}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ExpenceByMonths