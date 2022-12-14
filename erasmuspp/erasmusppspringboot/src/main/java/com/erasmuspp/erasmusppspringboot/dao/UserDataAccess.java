package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.User;

@Repository("user")
public class UserDataAccess implements UserDao {

    private final JdbcTemplate jdbcTemplate;

    public UserDataAccess(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    @Override
    public int insertUser(UUID id, User user) {
        final String sql = "INSERT INTO user (id, name)\nVALUES(?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, user.getName() });
    }

    @Override
    public List<User> selectAllUsers() {

        final String sql = "SELECT id, name FROM user";
        List<User> users = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            return new User(
                userId,
                name
            );
        });
        return users; 
    }

    @Override
    public Optional<User> selectUserById(UUID id) {

        return Optional.empty();
    }

    @Override
    public int deleteUserById(UUID id) {

        return 0;
    }

    @Override
    public int updateUserById(UUID id, User newUser) {

        return 0;
    }
    
}
