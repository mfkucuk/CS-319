package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User
{
    private final UUID id;

    private final String name;

    private final String bilkentId;

    private final String password;

    private final String role;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name,
                @JsonProperty("bilkentId") String bilkentId,
                @JsonProperty("password") String password,
                @JsonProperty("role") String role)
                {
                    this.id = id;
                    this.name = name;
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

    public String getBilkentId() {
        return bilkentId;
    }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }
}
