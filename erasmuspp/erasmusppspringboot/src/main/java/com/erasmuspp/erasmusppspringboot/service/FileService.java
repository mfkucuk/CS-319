package com.erasmuspp.erasmusppspringboot.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.FileDao;
import com.erasmuspp.erasmusppspringboot.model.File;

@Service
public class FileService {
    private final FileDao fileDao;

    public FileService(@Qualifier("file") FileDao fileDao) {
        this.fileDao = fileDao;
    }

    public int addFile(File file) {
        return fileDao.insertFile(file);
    }

    public Optional<File> getFileById(UUID id) {
        return fileDao.selectFileById(id);
    }

}
