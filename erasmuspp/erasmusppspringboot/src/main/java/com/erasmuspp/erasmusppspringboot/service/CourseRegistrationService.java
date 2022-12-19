package com.erasmuspp.erasmusppspringboot.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.CourseRegistrationDao;
import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;

@Service
public class CourseRegistrationService {
    private final CourseRegistrationDao courseRegistrationDao;

    public CourseRegistrationService(@Qualifier("courseRegistration") CourseRegistrationDao courseRegistrationDao) {
        this.courseRegistrationDao = courseRegistrationDao;
    }

    public int addCourseRegistration(CourseRegistration courseRegistration, String applicationId) {
        return courseRegistrationDao.insertCourseRegistration(courseRegistration, applicationId);
    }

    public Optional<CourseRegistration> getCourseRegistrationByApplicationId(String applicationId) {
        return courseRegistrationDao.selectCourseRegistrationByApplicationId(applicationId);
    }
}
