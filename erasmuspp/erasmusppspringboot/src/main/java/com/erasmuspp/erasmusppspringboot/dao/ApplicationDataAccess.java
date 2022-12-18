package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.Application;
import com.erasmuspp.erasmusppspringboot.model.User;

import lombok.RequiredArgsConstructor;


@Repository("application")
@RequiredArgsConstructor
public class ApplicationDataAccess implements ApplicationDao 
{
    private final JdbcTemplate jdbcTemplate;
    private UserDataAccess userDataAccess;

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
    public List<Application> selectApplicationsByToken(String token)
    {
        User user = userDataAccess.selectUserByToken(token).get();
        final String sql = "SELECT FROM \"application\" WHERE userid = " + user.getId();
        return jdbcTemplate.queryForList(sql,Application.class);
    }

    @Override
    public int updateApplicationById(UUID id, Application application) {
        return 0;
    }

    


}
