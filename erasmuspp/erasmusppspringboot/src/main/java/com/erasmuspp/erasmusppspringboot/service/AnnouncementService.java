package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.AnnouncementDao;
import com.erasmuspp.erasmusppspringboot.model.Announcement;

@Service
public class AnnouncementService
{
    private final AnnouncementDao announcementDao;

    public AnnouncementService(@Qualifier("postgres") AnnouncementDao announcementDao)
    {
        this.announcementDao = announcementDao;
    }

    public int addAnnouncement(Announcement announcement)
    {
        return announcementDao.insertAnnouncement(announcement);
    }

    public List<Announcement> getAllAnnouncements()
    {
        return announcementDao.selectAllAnnouncements();
    }

    public Optional<Announcement> getAnnouncementById(UUID id)
    {
        return announcementDao.selectAnnouncementById(id);
    }

    public int deleteAnnouncementById(UUID id)
    {
        return announcementDao.deleteAnnouncementById(id);
    }

    public int updateAnnouncementById(UUID id, Announcement announcement)
    {
        return announcementDao.updateAnnouncementById(id, announcement);
    }
}
