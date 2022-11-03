package com.isa.centarzatransfuzijukrvi.controller

import com.isa.centarzatransfuzijukrvi.model.RegisteredUser
import com.isa.centarzatransfuzijukrvi.service.RegisteredUserService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class RegisteredUserController(val registeredUserService: RegisteredUserService) {

    @PostMapping(path = ["/registration"], consumes = [MediaType.APPLICATION_JSON_VALUE], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun createRegisteredUser(@RequestBody registeredUser: RegisteredUser) : ResponseEntity<RegisteredUser>{
        println("ime:" + registeredUser.name)
        val registeredUser: RegisteredUser = RegisteredUser(registeredUser.id, registeredUser.name, registeredUser.surname, registeredUser.email,
            registeredUser.password, registeredUser.address, registeredUser.city, registeredUser.country, registeredUser.phone, registeredUser.jmbg,
            registeredUser.gender, registeredUser.occupation, registeredUser.information)

        val newRegisteredUser: RegisteredUser = registeredUserService.create(registeredUser)


        return ResponseEntity(newRegisteredUser, HttpStatus.CREATED)
    }
}