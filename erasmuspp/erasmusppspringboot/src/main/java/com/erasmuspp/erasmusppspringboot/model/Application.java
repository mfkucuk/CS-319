package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;


public class Application
{
    private final UUID id;
    private String semester;
    private String userId;
    private int stage;
    private boolean isEquivalanceApproved;
    private boolean isPreApprovalApproved;
    private String[] universityChoices;

    public Application(UUID id, String userId, String semester, int stage, boolean isEquivalanceApproved, boolean isPreApprovalApproved, String[] universityChoices)
    {
        this.id = id;
        this.userId = userId;
        this.semester = semester;
        this.stage = stage;
        this.isEquivalanceApproved = isEquivalanceApproved;
        this.isPreApprovalApproved = isPreApprovalApproved;
        this.universityChoices = universityChoices;
    }


    public void setSemester(String semester)
    {
        this.semester = semester;
    }

    public void setStage(int stage)
    {
        this.stage = stage;
    }

    public void setUserId(String userId)
    {
        this.userId = userId;
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

    public String getSemester()
    {
        return semester;
    }

    public String getUserId()
    {
        return userId;
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
