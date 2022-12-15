import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Container } from "@mui/system"
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import React from "react"
import { useState } from "react"
import AppointmentService from "../services/AppointmentService"

export default function SearchAppointmentsUser() {
    interface Appointments {
        appointment: {
            name: string
            address: string
            start: string
            end: string
        }[]
    }
    interface Query {
        date: string
    }

    const [appointments, setAppointments] = useState<Appointments["appointment"]>();

    const [query, setQuery] = useState<Query>({
        date: ""
    });

    const handleQuery = () => {
        AppointmentService.findAppointmentsUser(query).
            then((response) => {
                console.log(response.data);
                const available: Appointments["appointment"] = [];
                response.data.forEach((element: any) => {
                    available.push({
                        name: element.name,
                        address: element.address,
                        start: element.start.substring(0, 10).concat(" ", element.start.substring(11, 19)),
                        end: element.end.substring(0, 10).concat(" ", element.end.substring(11, 19)),
                    })
                })
                setAppointments(available)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleSchedule = (e: any) => {
        // AppointmentService.findAppointmentsUser(query).
        //     then((response) => {
        //         console.log(response.data);
        //         setAppointments(response.data)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        console.log(JSON.stringify(e.currentTarget.getAttribute("button-data")))
    }

    return (
        <Container>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ pt: 5 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        views={["year", "month", "day", "hours", "minutes"]}
                        disablePast
                        ampm={false}
                        renderInput={(props) => <TextField {...props} />}
                        label="Date and Time"
                        value={query.date}
                        onChange={(newValue) => setQuery({
                            date: newValue
                        })}
                    />
                </LocalizationProvider>
                <Button variant="contained" onClick={handleQuery} style={{ width: 200, alignSelf: 'center' }}>Search</Button>
            </Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, maxWidth: 1250, margin: "auto" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Start</TableCell>
                            <TableCell align="right">End</TableCell>
                            <TableCell align="right">Reserve</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.start}</TableCell>
                                <TableCell align="right">{row.end}</TableCell>
                                <TableCell align="right"><Button button-data={[row.address, row.start]} variant="contained" onClick={handleSchedule} style={{ alignSelf: 'right' }}>Reserve</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}