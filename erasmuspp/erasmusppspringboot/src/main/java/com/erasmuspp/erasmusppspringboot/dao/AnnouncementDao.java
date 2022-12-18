package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.Announcement;

public interface AnnouncementDao 
{
    int insertAnnouncement(UUID id, Announcement announcement);
    
    default int insertAnnouncement(Announcement announcement)
    {
        UUID id = UUID.randomUUID();
        return insertAnnouncement(id, announcement);
    }

    List<Announcement> selectAllAnnouncements();

    List<Announcement> selectFilteredAnnoucements(String token);

    Optional<Announcement> selectAnnouncementById(UUID id);

    int deleteAnnouncementById(UUID id);

    int updateAnnouncementById(UUID id, Announcement announcement);
}
