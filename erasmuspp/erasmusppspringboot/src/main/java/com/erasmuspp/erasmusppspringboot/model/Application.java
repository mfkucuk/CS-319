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
    private String choice1;
    private String choice2;
    private String choice3;
    private String choice4;
    private String choice5;

    public Application(UUID id, String userId, String semester, int stage, boolean isEquivalanceApproved, boolean isPreApprovalApproved, String choice1, String choice2, String choice3, String choice4, String choice5)
    {
        this.id = id;
        this.userId = userId;
        this.semester = semester;
        this.stage = stage;
        this.isEquivalanceApproved = isEquivalanceApproved;
        this.isPreApprovalApproved = isPreApprovalApproved;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.choice3 = choice3;
        this.choice4 = choice4;
        this.choice5 = choice5;
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

    public String getChoice1()
    {
        return choice1;
    }

    public String getChoice2()
    {
        return choice2;
    }
    public String getChoice3()
    {
        return choice3;
    }
    public String getChoice4()
    {
        return choice4;
    }
    public String getChoice5()
    {
        return choice5;
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

}
