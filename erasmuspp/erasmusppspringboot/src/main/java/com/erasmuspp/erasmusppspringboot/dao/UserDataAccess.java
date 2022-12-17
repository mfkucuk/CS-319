package com.erasmuspp.erasmusppspringboot.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.erasmuspp.erasmusppspringboot.model.User;

import lombok.RequiredArgsConstructor;

@Repository("user") @Transactional 
@RequiredArgsConstructor
public class UserDataAccess implements UserDao, UserDetailsService {

    private final JdbcTemplate jdbcTemplate;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = selectUserByEmail(email).orElse(null);

        if (user == null) {
            throw new UsernameNotFoundException("User not found in the database");
        }
        
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole()));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }
    
    @Override
    public int insertUser(UUID id, User user) {    
        final String sql = "INSERT INTO \"user\"\nVALUES(?, ?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, user.getName(), user.getEmail(), user.getBilkentId(), user.getPassword(), user.getRole() });
    }

    @Override
    public List<User> selectAllUsers() {

        final String sql = "SELECT * FROM \"user\"";
        List<User> users = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            String email = resultSet.getString("email");
            String bilkentId = resultSet.getString("bilkentId");
            String password = resultSet.getString("password"); 
            String role = resultSet.getString("role");
            return new User(
                userId,
                name,
                email,
                bilkentId,
                password,
                role
            );
        });
        return users; 
    }

    @Override
    public Optional<User> selectUserById(UUID id) {
        final String sql = "SELECT * FROM \"user\" WHERE \"id\" = ?";
        User user = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            String email = resultSet.getString("email");
            String bilkentId = resultSet.getString("bilkentId");
            String password = resultSet.getString("password");
            String role = resultSet.getString("role");
            return new User(
                userId,
                name,
                email,
                bilkentId,
                password,
                role
            );
        }, new Object[] {id});
        return Optional.ofNullable(user);
    }

    @Override
    public Optional<User> selectUserByEmail(String emailQuery) {
        final String sql = "SELECT * FROM \"user\" WHERE \"email\" = ?";
        User user = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            String email = resultSet.getString("email");
            String bilkentId = resultSet.getString("bilkentId");
            String password = resultSet.getString("password");
            String role = resultSet.getString("role");
            return new User(
                userId,
                name,
                email,
                bilkentId,
                password,
                role
            );
        }, new Object[] {emailQuery});
        return Optional.ofNullable(user);
    }

    @Override
    public int deleteUserById(UUID id) {

        return 0;
    }

    @Override
    public int updateUserById(UUID id, User newUser) {

        return 0;
    }
    
    @Override
    public int setUserRoleById(UUID id, String newRole) {
        final String sql = "UPDATE \"user\" SET \"role\" = ? WHERE \"id\" = ?";
        return jdbcTemplate.update(sql, newRole, id);
    }

    
}
