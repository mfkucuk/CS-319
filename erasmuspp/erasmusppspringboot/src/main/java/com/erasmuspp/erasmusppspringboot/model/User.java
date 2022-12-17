package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User
{
    private UUID id;

    private String name;

    private String email;

    private String bilkentId;

    private String password;

    private String role;

    private String token;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name,
                @JsonProperty("email") String email,
                @JsonProperty("bilkentId") String bilkentId,
                @JsonProperty("password") String password,
                @JsonProperty("role") String role,
                @JsonProperty("token") String token)
                {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.bilkentId = bilkentId;
                    this.password = password;
                    this.role = role;
                }
    public UUID getId()
    {
        return id;
    }

    public String getName()
    {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getBilkentId() {
        return bilkentId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String newPassword) {
        password = newPassword;
    }

    public String getRole() {
        return role;
    }

    public String getToken() {
        return token;
    }
}
