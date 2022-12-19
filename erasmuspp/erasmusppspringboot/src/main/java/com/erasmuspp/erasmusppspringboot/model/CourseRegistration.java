package com.erasmuspp.erasmusppspringboot.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CourseRegistration {

    private final String id;
    private final String applicationId;
    private final String[] bilkentCourse;
    private final String[] preApprovedCourse;

    public CourseRegistration(
        @JsonProperty("id") String id,
        @JsonProperty("applicationId") String applicationId,
        @JsonProperty("bilkentCourse") String[] bilkentCourse,
        @JsonProperty("preApprovedCourse") String[] preApprovedCourse
    ) {
        this.id = id;
        this.applicationId = applicationId;
        this.bilkentCourse = bilkentCourse;
        this.preApprovedCourse = preApprovedCourse;
    }

    public String getId() {
        return id;
    }

    public String getApplicationId() {
        return applicationId;
    }

    public String[] getBilkentCourse() {
        return bilkentCourse;
    }

    public String[] getPreApprovedCourse() {
        return preApprovedCourse;
    }
}
