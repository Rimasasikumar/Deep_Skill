package com.cognizant.jwt_authentication_service.controller;

import com.cognizant.jwt_authentication_service.model.AuthenticationResponse;
import com.cognizant.jwt_authentication_service.util.JwtUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(Principal principal) {

        LOGGER.info("START");

        String token = JwtUtil.generateToken(principal.getName());

        LOGGER.info("END");

        return new AuthenticationResponse(token);
    }

}