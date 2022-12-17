package com.erasmuspp.erasmusppspringboot.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticationRequest {
    
    private final String email;
    private final String password;

    public AuthenticationRequest(
        @JsonProperty("email") String email,
        @JsonProperty("password") String password
    ) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
