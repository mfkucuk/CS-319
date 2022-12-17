package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.User;

public interface UserDao {
    int insertUser(UUID id, User user);

    default int insertUser(User user) {
        UUID id = UUID.randomUUID();
        return insertUser(id, user);
    }

    List<User> selectAllUsers();

    Optional<User> selectUserById(UUID id);

    Optional<User> selectUserByEmail(String email);

    int deleteUserById(UUID id);

    int updateUserById(UUID id, User newUser);

    int setUserRoleById(UUID id, String newRole);
}
