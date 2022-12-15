package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.ApplicationDao;
import com.erasmuspp.erasmusppspringboot.model.Application;


@Service
public class ApplicationService 
{
    private final ApplicationDao applicationDao;

    public ApplicationService(@Qualifier("application") ApplicationDao applicationDao)
    {
        this.applicationDao = applicationDao;
    }

    public int addApplication(Application application)
    {
        return applicationDao.insertApplication(application);
    }

    public List<Application> getAllApplication()
    {
        return applicationDao.selectAllApplications();
    }

    public Optional<Application> getApplicationById(UUID id)
    {
        return applicationDao.selectApplicationById(id);
    }

    public int deleteApplicationById(UUID id)
    {
        return applicationDao.deleteApplicationById(id);
    }

    public int updateApplicationById(UUID id, Application application)
    {
        return applicationDao.updateApplicationById(id, application);
    }
}