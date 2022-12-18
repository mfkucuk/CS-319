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
        final String sql = "INSERT INTO \"user\"\nVALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, user.getFirstName(), user.getLastName(), user.getDob(), user.getNationality(), user.getEmail(), user.getBilkentId(), user.getDepartment(), user.getGpa(), user.getPersonalEmail(), user.getMobilePhone(), user.getAboutMe(), user.getPassword(), user.getRole(), user.getToken() });
    }

    @Override
    public List<User> selectAllUsers() {

        final String sql = "SELECT * FROM \"user\"";
        List<User> users = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String firstName = resultSet.getString("firstName");
            String lastName = resultSet.getString("lastName");
            String dob = resultSet.getString("dob");
            String nationality = resultSet.getString("nationality"); 
            String email = resultSet.getString("email");
            String bilkentID = resultSet.getString("bilkentId");
            String department = resultSet.getString("department");
            String gpa = resultSet.getString("gpa");
            String personalEmail = resultSet.getString("personalEmail");
            String mobilePhone = resultSet.getString("mobilePhone");
            String aboutMe = resultSet.getString("aboutMe");
            String password = resultSet.getString("password");
            String role = resultSet.getString("role");
            String token = resultSet.getString("token");
            return new User(
                userId,
                firstName,
                lastName,
                dob,
                nationality,
                email,
                bilkentID,
                department,
                gpa,
                personalEmail,
                mobilePhone,
                aboutMe,
                password,
                role,
                token
            );
        });
        return users; 
    }

    @Override
    public Optional<User> selectUserById(UUID id) {
        final String sql = "SELECT * FROM \"user\" WHERE id = ?";
        User user = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String firstName = resultSet.getString("firstName");
            String lastName = resultSet.getString("lastName");
            String dob = resultSet.getString("dob");
            String nationality = resultSet.getString("nationality"); 
            String email = resultSet.getString("email");
            String bilkentID = resultSet.getString("bilkentId");
            String department = resultSet.getString("department");
            String gpa = resultSet.getString("gpa");
            String personalEmail = resultSet.getString("personalEmail");
            String mobilePhone = resultSet.getString("mobilePhone");
            String aboutMe = resultSet.getString("aboutMe");
            String password = resultSet.getString("password");
            String role = resultSet.getString("role");
            String token = resultSet.getString("token");
            return new User(
                userId,
                firstName,
                lastName,
                dob,
                nationality,
                email,
                bilkentID,
                department,
                gpa,
                personalEmail,
                mobilePhone,
                aboutMe,
                password,
                role,
                token
            );
        }, new Object[] {id});
        return Optional.ofNullable(user);
    }

    @Override
    public Optional<User> selectUserByEmail(String emailQuery) {
        final String sql = "SELECT * FROM \"user\" WHERE email = ?";
        User user = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String firstName = resultSet.getString("firstName");
            String lastName = resultSet.getString("lastName");
            String dob = resultSet.getString("dob");
            String nationality = resultSet.getString("nationality"); 
            String email = resultSet.getString("email");
            String bilkentID = resultSet.getString("bilkentId");
            String department = resultSet.getString("department");
            String gpa = resultSet.getString("gpa");
            String personalEmail = resultSet.getString("personalEmail");
            String mobilePhone = resultSet.getString("mobilePhone");
            String aboutMe = resultSet.getString("aboutMe");
            String password = resultSet.getString("password");
            String role = resultSet.getString("role");
            String token = resultSet.getString("token");
            return new User(
                userId,
                firstName,
                lastName,
                dob,
                nationality,
                email,
                bilkentID,
                department,
                gpa,
                personalEmail,
                mobilePhone,
                aboutMe,
                password,
                role,
                token
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

    @Override
    public Optional<User> selectUserByToken(String tokenQuery) {
        final String sql = "SELECT * FROM \"user\" WHERE token = ?";
        User user = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID userId = UUID.fromString(resultSet.getString("id"));
            String firstName = resultSet.getString("firstName");
            String lastName = resultSet.getString("lastName");
            String dob = resultSet.getString("dob");
            String nationality = resultSet.getString("nationality"); 
            String email = resultSet.getString("email");
            String bilkentID = resultSet.getString("bilkentId");
            String department = resultSet.getString("department");
            String gpa = resultSet.getString("gpa");
            String personalEmail = resultSet.getString("personalEmail");
            String mobilePhone = resultSet.getString("mobilePhone");
            String aboutMe = resultSet.getString("aboutMe");
            String password = resultSet.getString("password");
            String role = resultSet.getString("role");
            String token = resultSet.getString("token");
            return new User(
                userId,
                firstName,
                lastName,
                dob,
                nationality,
                email,
                bilkentID,
                department,
                gpa,
                personalEmail,
                mobilePhone,
                aboutMe,
                password,
                role,
                token
            );
        }, new Object[] {tokenQuery});
        return Optional.ofNullable(user);
    }

    @Override
    public int updateTokenByEmail(String email, String newToken) {
        final String sql = "UPDATE \"user\" SET \"token\" = ? WHERE \"email\" = ?";
        return jdbcTemplate.update(sql, newToken, email);
    }

    @Override
    public int updatePasswordByToken(String token, String newPassword) {
        final String sql = "UPDATE \"user\" SET \"password\" = ? WHERE \"token\" = ?";
        return jdbcTemplate.update(sql, newPassword, token);
    }

    @Override
    public int updateAboutMeByToken(String token, String newAboutMe) {
        final String sql = "UPDATE \"user\" SET \"aboutMe\" = ? WHERE \"token\" = ?";
        return jdbcTemplate.update(sql, newAboutMe, token);
    }
}
