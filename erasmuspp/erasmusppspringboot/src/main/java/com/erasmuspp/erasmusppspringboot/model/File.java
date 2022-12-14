package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class File {
    private final UUID id;

    private final byte[] content;

    private final String fileName;

    private final String uploadTime;

    public File(@JsonProperty("id") UUID id,
                @JsonProperty("content") byte[] content,
                @JsonProperty("fileName") String fileName,
                @JsonProperty("uploadTime") String uploadTime) {

        this.id = id;    
        this.content = content;
        this.fileName = fileName;
        this.uploadTime = uploadTime;        
    }

    public UUID getId() {
        return id;
    }

    public byte[] getContent() {
        return content;
    }

    public String getFileName() {
        return fileName;
    }

    public String getUploadTime() {
        return uploadTime;
    }
}
