package com.erasmuspp.erasmusppspringboot.dao;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;

@Repository("courseRegistration")
public class CourseRegistrationDataAccess implements CourseRegistrationDao {

    @Override
    public int insertCourseRegistration(String id, CourseRegistration courseRegistration, String applicationId) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public Optional<CourseRegistration> selectCourseRegistrationByApplicationId(String applicationId) {
        // TODO Auto-generated method stub
        return Optional.empty();
    }
    
}
