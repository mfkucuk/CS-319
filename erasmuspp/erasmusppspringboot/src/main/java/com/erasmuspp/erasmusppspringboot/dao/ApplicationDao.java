package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.Application;

public interface ApplicationDao 
{
    int insertApplication(UUID id, Application application);

    default int insertApplication(Application application)
    {
        UUID id = UUID.randomUUID();
        return insertApplication(id, application);
    }

    List<Application> selectApplicationsByToken(String token);

    List<Application> selectAllApplications();

    Optional<Application> selectApplicationById(UUID id);

    int deleteApplicationById(UUID id);

    int updateApplicationById(UUID id, Application application);
}
