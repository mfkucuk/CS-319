package com.erasmuspp.erasmusppspringboot.dao;

import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;

public interface CourseRegistrationDao {
    int insertCourseRegistration(String id, CourseRegistration courseRegistration, String applicationId);

    default int insertCourseRegistration(CourseRegistration courseRegistration, String applicationId) {
        String id = UUID.randomUUID().toString();

        return insertCourseRegistration(id, courseRegistration, applicationId);
    }

    Optional<CourseRegistration> selectCourseRegistrationByApplicationId(String applicationId);
}
