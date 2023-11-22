import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import InfoCard from '../../Components/InfoCard/InfoCard'
import { Grid } from '@mui/material'
export default function Home() {
    return (
        <div>
            <Navbar />
            <br />
            <Grid container justifyItems={'center'} justifyContent={'center'}>
                <Grid item>
                    <InfoCard title="this" content="hello do you want to win"></InfoCard>
                </Grid>
            </Grid>
        </div>
    )
}
