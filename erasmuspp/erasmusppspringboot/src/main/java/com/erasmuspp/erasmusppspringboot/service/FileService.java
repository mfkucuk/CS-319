package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;
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

    public List<File> getAllFiles() {
        return fileDao.selectAllFiles();
    }

    public Optional<File> getFileById(UUID id) {
        return fileDao.selectFileById(id);
    }

    public int deleteFileById(UUID id) {
        return fileDao.deleteFileById(id);
    }

    public int updateFileById(UUID id, File file) {
        return fileDao.updateFileById(id, file);
    }
}
