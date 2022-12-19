package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.dto.ApplicationRequest;
import com.erasmuspp.erasmusppspringboot.model.Application;

public interface ApplicationDao 
{
    int insertApplication(UUID id, ApplicationRequest application, String token);

    default int insertApplication(ApplicationRequest application, String token)
    {
        UUID id = UUID.randomUUID();
        return insertApplication(id, application, token);
    }

    List<Application> selectApplicationsByToken(String token);

    List<Application> selectAllApplications(String token);

    Optional<Application> selectApplicationById(UUID id);

    int deleteApplicationById(UUID id);

    int updateApplicationStatus(UUID id);

    int incrementStage(UUID applicationId);

    int disapprove(UUID applicationId);
}
