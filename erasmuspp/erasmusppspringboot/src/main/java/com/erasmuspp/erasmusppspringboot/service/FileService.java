package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;

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

    public List<File> getFilesByApplication(String application) {
        return fileDao.selectFilesByApplication(application);
    }

}
