package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.Application;

@Repository("application")
public class ApplicationDataAccess implements ApplicationDao 
{
    private final JdbcTemplate jdbcTemplate;

    public ApplicationDataAccess(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertApplication(UUID id, Application application) {
        return 0;
    }

    @Override
    public List<Application> selectAllApplications() {
        return null;
    }

    @Override
    public Optional<Application> selectApplicationById(UUID id) {
        return Optional.empty();
    }

    @Override
    public int deleteApplicationById(UUID id) {
        final String sql = "DELETE FROM \"application\" WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }

    @Override
    public int updateApplicationById(UUID id, Application application) {
        return 0;
    }

    


}