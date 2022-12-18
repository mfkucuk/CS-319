package com.erasmuspp.erasmusppspringboot.api;

import java.util.List;

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

    @GetMapping(path = "{application}")
    public List<File> getFilesByApplication(@PathVariable("application") String application) {
        return fileService.getFilesByApplication(application);
    }

}
