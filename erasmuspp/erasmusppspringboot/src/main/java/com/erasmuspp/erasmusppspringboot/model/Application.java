package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Application
{
    private final UUID id;
    private File[] applicationFiles;
    private String semester;
    private int stage;
    private boolean isEquivalanceApproved;
    private boolean isPreApprovalApproved;
    private String[] universityChoices;

    public Application(@JsonProperty("id") UUID id,
                       @JsonProperty("files") File[] applicationFiles,
                       @JsonProperty("semester") String semester,
                       @JsonProperty("stage") int stage,
                       @JsonProperty("equivalance") boolean isEquivalanceApproved,
                       @JsonProperty("preapproval") boolean isPreApprovalApproved,
                       @JsonProperty("choices") String[] universityChocies)
                       
    {
        this.id = id;
        this.applicationFiles = applicationFiles;
        this.semester = semester;
        this.stage = stage;
        this.isEquivalanceApproved = isEquivalanceApproved;
        this.isPreApprovalApproved = isPreApprovalApproved;
        this.universityChoices = universityChocies;
    }


    public void setApplicationFiles(File[] applicationFiles)
    {
        this.applicationFiles = applicationFiles;
        applicationFiles = new File[3]; 
        universityChoices = new String[3];
    }

    public void setSemester(String semester)
    {
        this.semester = semester;
    }

    public void setStage(int stage)
    {
        this.stage = stage;
    }

    public void setEquivalanceApproved(boolean bool)
    {
        isEquivalanceApproved = bool;
    }

    public void setPreApprovalApproved(boolean bool)
    {
        isPreApprovalApproved = bool;
    }

    public void setUniversityChoices(String[] universityChocies)
    {
        this.universityChoices = universityChocies; 
    }

    public UUID getId()
    {
        return id;
    }

    public File[] getFiles()
    {
        return applicationFiles;
    }

    public String getSemester()
    {
        return semester;
    }

    public int getStage()
    {
        return stage;
    }

    public boolean getEquivalanceApproved()
    {
        return isEquivalanceApproved;
    }

    public boolean getPreApprovalApproved()
    {
        return isPreApprovalApproved;
    }

    public String[] getChoices()
    {
        return universityChoices;
    }

}
