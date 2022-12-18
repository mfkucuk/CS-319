package com.erasmuspp.erasmusppspringboot.api;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.erasmuspp.erasmusppspringboot.model.File;
import com.erasmuspp.erasmusppspringboot.service.FileService;

@RequestMapping("api/v1/file")
@CrossOrigin(origins = "*")
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

    @GetMapping(path = "{id}")
    public File getFileById(@PathVariable("id") UUID id) {
        return fileService.getFileById(id).orElse(null);
    }

}
