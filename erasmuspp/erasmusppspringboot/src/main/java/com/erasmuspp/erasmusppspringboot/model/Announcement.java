package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;


public class Announcement 
{
    // commit
    private final UUID id;
    private final String title;
    private final String content;
    private final String postDate;
    private final String expireDate;

    public Announcement(@JsonProperty("id") UUID id,
                        @JsonProperty("title") String title,
                        @JsonProperty("content") String content,
                        @JsonProperty("postDate") String postDate,
                        @JsonProperty("expireDate") String expireDate)
                        {
                            this.id = id;
                            this.title = title;
                            this.content = content;
                            this.postDate = postDate;
                            this.expireDate = expireDate;
                        }

    public UUID getId()
    {
        return id;
    }

    public String getTitle()
    {
        return title;
    }
    public String getContent()
    {
        return content;
    }
    public String getPostDate()
    {
        return postDate;
    }
    public String getExpireDate()
    {
        return expireDate;
    }
}
