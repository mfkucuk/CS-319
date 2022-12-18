package com.erasmuspp.erasmusppspringboot.dao;

import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.File;

public interface FileDao {
    int insertFile(UUID id, File file);

    default int insertFile(File file) {
        UUID id = UUID.randomUUID();
        return insertFile(id, file);
    }

    Optional<File> selectFileById(UUID id);

}
