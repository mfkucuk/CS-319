package com.erasmuspp.erasmusppspringboot.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.dto.ApplicationRequest;
import com.erasmuspp.erasmusppspringboot.model.Application;
import com.erasmuspp.erasmusppspringboot.model.User;

import lombok.RequiredArgsConstructor;


@Repository("application")
@RequiredArgsConstructor
public class ApplicationDataAccess implements ApplicationDao 
{
    private final JdbcTemplate jdbcTemplate;
    private final UserDataAccess userDataAccess;

    @Override
    public int insertApplication(UUID id, ApplicationRequest application, String token) {
        User user = userDataAccess.selectUserByToken(token).orElse(null);
        final String sql = "INSERT INTO \"application\"\nVALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, application.getSemester(), 1, false, false, user.getId().toString(), application.getChoice1(), application.getChoice2(), application.getChoice3(), application.getChoice4(), application.getChoice5(), "Pending"});
    }

    @Override
    public List<Application> selectAllApplications(String token) {
        final String sql = "SELECT * FROM \"application\"";
        List<Application> applications = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID applicationId = UUID.fromString(resultSet.getString("id"));
            String userId = resultSet.getString("userid");
            String semester = resultSet.getString("semester");
            int stage = resultSet.getInt("stage");
            boolean equivalance = resultSet.getBoolean("isequivalanceapproved");
            boolean preapproval = resultSet.getBoolean("ispreapprovalapproved");
            String choice1 = resultSet.getString("choice1");
            String choice2 = resultSet.getString("choice2");
            String choice3 = resultSet.getString("choice3");
            String choice4 = resultSet.getString("choice4");
            String choice5 = resultSet.getString("choice5");
            String status = resultSet.getString("status");
            return new Application(
                applicationId,
                userId,
                semester,
                stage,
                equivalance,
                preapproval,
                choice1,
                choice2,
                choice3,
                choice4,
                choice5,
                status
            );
        });

        List<Application> result = filterByDepartment(applications, token);
        return result;
    }

    @Override
    public Optional<Application> selectApplicationById(UUID id) {
        final String sql = "SELECT * FROM \"application\" WHERE \"id\" = ?";
        Application application = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID applicationId = UUID.fromString(resultSet.getString("id"));
            String userId = resultSet.getString("userid");
            String semester = resultSet.getString("semester");
            int stage = resultSet.getInt("stage");
            boolean equivalance = resultSet.getBoolean("isequivalanceapproved");
            boolean preapproval = resultSet.getBoolean("ispreapprovalapproved");
            String choice1 = resultSet.getString("choice1");
            String choice2 = resultSet.getString("choice2");
            String choice3 = resultSet.getString("choice3");
            String choice4 = resultSet.getString("choice4");
            String choice5 = resultSet.getString("choice5");
            String status = resultSet.getString("status");
            return new Application(
                applicationId,
                userId,
                semester,
                stage,
                equivalance,
                preapproval,
                choice1,
                choice2,
                choice3,
                choice4,
                choice5,
                status
            );
        }, new Object[] {id});

        return Optional.ofNullable(application);
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
        final String sql = "SELECT * FROM \"application\"";
        List<Application> applications = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID applicationId = UUID.fromString(resultSet.getString("id"));
            String userId = resultSet.getString("userid");
            String semester = resultSet.getString("semester");
            int stage = resultSet.getInt("stage");
            boolean equivalance = resultSet.getBoolean("isequivalanceapproved");
            boolean preapproval = resultSet.getBoolean("ispreapprovalapproved");
            String choice1 = resultSet.getString("choice1");
            String choice2 = resultSet.getString("choice2");
            String choice3 = resultSet.getString("choice3");
            String choice4 = resultSet.getString("choice4");
            String choice5 = resultSet.getString("choice5");
            String status = resultSet.getString("status");
            return new Application(
                applicationId,
                userId,
                semester,
                stage,
                equivalance,
                preapproval,
                choice1,
                choice2,
                choice3,
                choice4,
                choice5,
                status
            );
        });

        List<Application> result = new ArrayList<Application>();
        for (int i = 0; i < applications.size(); i++)
        {
            Application application = applications.get(i);
            if (application.getUserId().equals(user.getId().toString()))
            {
                result.add(application);
            }
        }
        return result; 
    }

    @Override
    public int updateApplicationStatus(UUID id) {
        final String sql = "UPDATE \"application\" SET \"status\" = ? WHERE \"id\" = ?";
        return jdbcTemplate.update(sql, "Pending", id);
    }

    
    private List<Application> filterByDepartment(List<Application> applications, String token) {
        List<Application> result = new ArrayList<>();

        User coordinator = userDataAccess.selectUserByToken(token).orElse(null);

        for (Application application : applications) {
            User ownerOfApplication = userDataAccess.selectUserById(UUID.fromString(application.getUserId())).orElse(null);

            if (coordinator.getDepartment().equals(ownerOfApplication.getDepartment()) && application.getStatus().equals("Pending")) {
                result.add(application);
            }
        }

        return result;
    }

    @Override
    public int incrementStage(UUID applicationId) {
        final String sql = "UPDATE \"application\"\nSET \"stage\" = ?, \"status\" = ?, \"isequivalanceapproved\" = ?, \"ispreapprovalapproved\" = ?\nWHERE \"id\" = ?";
        Application app = selectApplicationById(applicationId).orElse(null);

        Boolean isEquivalence = app.getEquivalanceApproved();
        Boolean isPreApproval = app.getPreApprovalApproved();

        if (app.getStage() == 2) {
            isEquivalence = true;
        }

        if (app.getStage() == 3) {
            isEquivalence = true;
        }

        return jdbcTemplate.update(sql, app.getStage() + 1, "Approved", isEquivalence, isPreApproval, applicationId);
    }

    @Override
    public int disapprove(UUID applicationId) {
        final String sql = "UPDATE \"application\" SET \"status\" = ? WHERE \"id\" = ?";
        return jdbcTemplate.update(sql, "Disapproved", applicationId);
    }

}
