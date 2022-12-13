package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;

import com.erasmuspp.erasmusppspringboot.dao.UserDao;
import com.erasmuspp.erasmusppspringboot.model.User;

public class UserService {
    private final UserDao userDao;

    public UserService(@Qualifier("postgres") UserDao userDao)
    {
        this.userDao = userDao;
    }

    public int addUser(User user)
    {
        return userDao.insertUser(user);
    }

    public List<User> getAllUsers()
    {
        return userDao.selectAllUsers();
    }

    public Optional<User> getUserById(UUID id)
    {
        return userDao.selectUserById(id);
    }

    public int deleteUserById(UUID id)
    {
        return userDao.deleteUserById(id);
    }

    public int updateUserById(UUID id, User user)
    {
        return userDao.updateUserById(id, user);
    }
}
