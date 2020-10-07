import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../../Actions/doctorsAction';
import DoctorCard from '../../../Components/Cards/DoctorCard'
import Grid from '@material-ui/core/Grid';


const DoctorList = () => {

    const doctors = useSelector((state) => state.doctors.doctors)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDoctors())
    }, [dispatch])
    console.log(doctors)
    return (
        <Grid
            container
            spacing={3}>
            {doctors && doctors.length > 0 ? doctors.map((doctor, index) => {
                return (

                    <Grid item xs={12}>
                        <DoctorCard key={index} doctor={doctor} />
                    </Grid>
                )
            }) : <div><h3>No doctor Available</h3></div>}
        </Grid>

    );
}

export default DoctorList;