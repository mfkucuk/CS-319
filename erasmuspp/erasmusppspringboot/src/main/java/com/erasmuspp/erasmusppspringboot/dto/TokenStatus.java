package com.erasmuspp.erasmusppspringboot.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TokenStatus {
    private final boolean status; 
    private final String jwt;

    public TokenStatus(
        @JsonProperty("status") boolean status,
        @JsonProperty("jwt") String jwt) {
        this.status = status;
        this.jwt = jwt;
    }

    public boolean getStatus() {
        return status;
    }

    public String getJwt() {
        return jwt;
    }
}
