package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.File;

@Repository("file")
public class FileDataAccess implements FileDao {

    private final JdbcTemplate jdbcTemplate;

    public FileDataAccess(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertFile(UUID id, File file) {
        final String sql = "INSERT INTO \"file\"\nVALUES(?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, file.getApplicationId(), file.getContent(), file.getFileName(), file.getUploadTime() });
    }

    @Override
    public List<File> selectFilesByApplication(String application) {
        final String sql = "SELECT * FROM \"file\" WHERE application = ?";
        List<File> files = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID fileId = UUID.fromString(resultSet.getString("id"));
            String content = resultSet.getString("content");
            String fileName = resultSet.getString("fileName");
            String uploadTime = resultSet.getString("uploadTime");
            return new File(
                fileId,
                application,
                content,
                fileName,
                uploadTime
            );
        });
        return files;
    }

}
