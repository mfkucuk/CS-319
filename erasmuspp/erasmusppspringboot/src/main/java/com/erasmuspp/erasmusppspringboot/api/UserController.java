package com.erasmuspp.erasmusppspringboot.api;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.erasmuspp.erasmusppspringboot.model.User;
import com.erasmuspp.erasmusppspringboot.service.UserService;

@RequestMapping("/api/v1/user")
@RestController()
public class UserController {
    private final UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@Valid @RequestBody User user)
    {
        userService.addUser(user);
    }

    @GetMapping()
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{id}")
    public User getUserById(@PathVariable("id") UUID id)
    {
        return userService.getUserById(id).orElse(null);
    } 

    @GetMapping(path = "{email}")
    public User getUserByEmail(@PathVariable("email") String email)
    {
        return userService.getUserByEmail(email).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public int deletePersonById(@PathVariable("id") UUID id)
    {
        return userService.deleteUserById(id);
    }

    @PutMapping(path = "{id}")
    public int updateUserById(@PathVariable("id") UUID id, @Valid @RequestBody User user)
    {
        return userService.updateUserById(id, user);
    }
}
