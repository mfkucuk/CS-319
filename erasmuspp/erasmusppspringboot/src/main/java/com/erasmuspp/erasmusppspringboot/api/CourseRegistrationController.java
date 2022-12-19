package com.erasmuspp.erasmusppspringboot.api;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;
import com.erasmuspp.erasmusppspringboot.service.CourseRegistrationService;
import org.springframework.web.bind.annotation.GetMapping;

@RequestMapping(value = "api/v1/courseRegistratiob")
@CrossOrigin(origins = "*")
@RestController
public class CourseRegistrationController {
    private final CourseRegistrationService courseRegistrationService;

    public CourseRegistrationController(CourseRegistrationService courseRegistrationService) {
        this.courseRegistrationService = courseRegistrationService;
    }

    @PostMapping(path = "applicationId={applicationId}")
    public int addCourseRegistration(@PathVariable("applicationId") String applicationId, @Valid @RequestBody CourseRegistration cr) {
        return courseRegistrationService.addCourseRegistration(cr, applicationId);
    }

    @GetMapping(path = "application={applicationId}")
    public CourseRegistration getCourseRegistrationByApplicationId(@PathVariable("applicationId") String id) {
        return courseRegistrationService.getCourseRegistrationByApplicationId(id).orElse(null);
    }
    
}
