package com.erasmuspp.erasmusppspringboot.api;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erasmuspp.erasmusppspringboot.model.Announcement;
import com.erasmuspp.erasmusppspringboot.service.AnnouncementService;

import jakarta.annotation.Nonnull;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class AnnouncementController
{
    private final AnnouncementService announcementService;

    public AnnouncementController(AnnouncementService announcementService)
    {
        this.announcementService = announcementService;
    }

    @PostMapping
    public void addAnnounement(@Nonnull @Valid @RequestBody Announcement announcement)
    {
        announcementService.addAnnouncement(announcement);
    }

    @GetMapping
    public List<Announcement> getAllAnnouncements()
    {
        return announcementService.getAllAnnouncements();
    }

    @GetMapping(path = "{id}")
    public Announcement getAnnouncementById(@PathVariable("id") UUID id)
    {
        return announcementService.getAnnouncementById(id).orElse(null);
    } 

    @DeleteMapping(path = "{id}")
    public int deletePersonById(@PathVariable("id") UUID id)
    {
        return announcementService.deleteAnnouncementById(id);
    }

    @PutMapping(path = "{id}")
    public int updateAnnouncementById(@PathVariable("id") UUID id, @Valid @Nonnull @RequestBody Announcement announcement)
    {
        return announcementService.updateAnnouncementById(id, announcement);
    }
}
