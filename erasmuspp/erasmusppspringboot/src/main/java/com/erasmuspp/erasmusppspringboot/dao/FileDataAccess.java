package com.erasmuspp.erasmusppspringboot.dao;

import java.util.Optional;
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
        final String sql = "INSERT INTO \"file\"\nVALUES(?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, file.getContent(), file.getFileName(), file.getUploadTime() });
    }

    @Override
    public Optional<File> selectFileById(UUID id) {
        final String sql = "SELECT * FROM \"file\" WHERE id = ?";
        File file = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            String fileId = resultSet.getString("id");
            String content = resultSet.getString("content");
            String fileName = resultSet.getString("fileName");
            String uploadTime = resultSet.getString("uploadTime");
            return new File(
                id,
                fileId,
                content,
                fileName,
                uploadTime
            );
        }, new Object[] {id});
        return Optional.ofNullable(file);
    }

}
