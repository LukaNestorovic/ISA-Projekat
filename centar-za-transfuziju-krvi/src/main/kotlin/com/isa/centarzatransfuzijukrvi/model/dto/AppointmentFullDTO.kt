package com.isa.centarzatransfuzijukrvi.model.dto

import java.util.*

data class AppointmentFullDTO (
    val start: Date,
    val end: Date,
    val title: String,
    val allDay:Boolean=false,
    val resource:String="resurs",
    )