package com.erasmuspp.erasmusppspringboot.dao;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;

@Repository("courseRegistration")
public class CourseRegistrationDataAccess implements CourseRegistrationDao {

    private final JdbcTemplate jdbcTemplate;

    public CourseRegistrationDataAccess(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    } 

    @Override
    public int insertCourseRegistration(String id, CourseRegistration courseRegistration, String applicationId) {
        final String sql = "INSERT INTO \"courseRegistration\"\nVALUES (?, ?, ?, ?);";
        return jdbcTemplate.update(sql, id, applicationId, courseRegistration.getBilkentCourse(), courseRegistration.getPreApprovedCourse());
    }

    @Override
    public Optional<CourseRegistration> selectCourseRegistrationByApplicationId(String applicationId) {
        final String sql = "SELECT * FROM \"courseRegistration\" WHERE \"applicationId\" = ?";
        CourseRegistration courseRegistration = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            String id = resultSet.getString("id");
            String applicationid = resultSet.getString("applicationId");
            String[] bilkentCourse = (String[]) resultSet.getArray("bilkentCourses").getArray();
            String[] preApprovedCourse = (String[]) resultSet.getArray("preApprovedCourses").getArray();
            return new CourseRegistration(
                id,
                applicationid,
                bilkentCourse,
                preApprovedCourse
            );
        }, applicationId);

        return Optional.ofNullable(courseRegistration);
    }
    
}
