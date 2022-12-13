package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.File;

public interface FileDao {
    int insertFile(UUID id, File file);

    default int insertFile(File file) {
        UUID id = UUID.randomUUID();
        return insertFile(id, file);
    }

    List<File> selectAllFiles();

    Optional<File> selectFileById(UUID id);

    int deleteFileById(UUID id);

    int updateFileById(UUID id, File newFile);
}
