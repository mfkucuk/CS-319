package com.erasmuspp.erasmusppspringboot.dao;

import java.io.FileNotFoundException;
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
    public int insertUser(UUID id, User user) throws FileNotFoundException {   
        final String sql = "INSERT INTO \"user\"\nVALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, user.getFirstName(), user.getLastName(), user.getDob(), user.getNationality(), user.getEmail(), user.getBilkentId(), user.getDepartment(), user.getGpa(), user.getPersonalEmail(), user.getMobilePhone(), user.getAboutMe(), user.getPassword(), user.getRole(), user.getToken(), getBaseProfilePhoto() });
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
            String profilePhoto = resultSet.getString("profilePhoto");
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
                token,
                profilePhoto
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
            String profilePhoto = resultSet.getString("profilePhoto");
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
                token,
                profilePhoto
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
            String profilePhoto = resultSet.getString("profilePhoto");
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
                token,
                profilePhoto
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
            String profilePhoto = resultSet.getString("profilePhoto");
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
                token,
                profilePhoto
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

    @Override
    public int updatePersonalEmailByToken(String token, String newPersonalEmail) {
        final String sql = "UPDATE \"user\" SET \"personalEmail\" = ? WHERE \"token\" = ?";
        return jdbcTemplate.update(sql, newPersonalEmail, token);
    }

    @Override
    public int updateMobilePhoneByToken(String token, String newMobilePhone) {
        final String sql = "UPDATE \"user\" SET \"mobilePhone\" = ? WHERE \"token\" = ?";
        return jdbcTemplate.update(sql, newMobilePhone, token);
    }

    @Override
    public int updateProfilePhotoByToken(String token, String newProfilePhoto) {
        final String sql = "UPDATE \"user\" SET \"profilePhoto\" = ? WHERE \"token\" = ?";
        return jdbcTemplate.update(sql, newProfilePhoto, token);
    }

    @Override
    public List<String> selectAllDepartments() {
        final String sql = "SELECT department FROM \"user\"";
        List<String> departments = jdbcTemplate.query(sql, (resultSet, i) -> {
            return resultSet.getString("department");
        });

        List<String> filteredList = new ArrayList<String>();
        
        for (String department : departments) {
            if (!filteredList.contains(department)) {
                filteredList.add(department);
            }
        }

        return filteredList;
    }

    @Override
    public List<String> selectAllUniversities() {
        // final String sql = "SELECT  FROM \"user\"";
        // List<String> departments = jdbcTemplate.query(sql, (resultSet, i) -> {
        //     return resultSet.getString("department");
        // });
        // return departments;
        return null;
    }

    @Override
    public List<String> selectAllCountries() {
        final String sql = "SELECT nationality FROM \"user\"";
        List<String> nationalities = jdbcTemplate.query(sql, (resultSet, i) -> {
            return resultSet.getString("nationality");
        });

        List<String> filteredList = new ArrayList<String>();
        
        for (String nationality : nationalities) {
            if (!filteredList.contains(nationality)) {
                filteredList.add(nationality);
            }
        }

        return filteredList;
    }

    @Override
    public List<User> selectAllCandidates() {
        final String sql = "SELECT * FROM \"user\" WHERE role = ?";
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
            String profilePhoto = resultSet.getString("profilePhoto");
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
                token,
                profilePhoto
            );
        }, new Object[] { "ROLE_CANDIDATE" });
        return users;
    } 

    public String getBaseProfilePhoto() {
        return "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";
    }
}
