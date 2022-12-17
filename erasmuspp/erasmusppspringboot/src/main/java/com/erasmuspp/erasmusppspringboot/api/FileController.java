package com.erasmuspp.erasmusppspringboot.api;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.erasmuspp.erasmusppspringboot.model.File;
import com.erasmuspp.erasmusppspringboot.service.FileService;

@RequestMapping("api/v1/file")
@RestController
public class FileController {
    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping
    public void addFile(@Valid @RequestBody File file) {
        fileService.addFile(file);
    }

    @GetMapping
    public List<File> getAllFiles() {
        return fileService.getAllFiles();
    }

    @GetMapping(path = "{id}")
    public File getFileById(@PathVariable("id") UUID id) {
        return fileService.getFileById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public int deleteFileById(@PathVariable("id") UUID id) {
        return fileService.deleteFileById(id);
    }

    @PutMapping(path = "{id}")
    public int updateFileById(@PathVariable("id") UUID id, @Valid @RequestBody File file) {
        return fileService.updateFileById(id, file);
    }
}
