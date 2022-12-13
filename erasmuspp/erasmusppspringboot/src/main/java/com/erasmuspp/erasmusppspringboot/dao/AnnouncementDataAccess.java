package com.erasmuspp.erasmusppspringboot.dao;

import java.util.UUID;
import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.Announcement;



@Repository("postgres")
public class AnnouncementDataAccess implements AnnouncementDao
{
   private final JdbcTemplate jdbcTemplate;
   
   public AnnouncementDataAccess(JdbcTemplate jdbcTemplate)
   {
    this.jdbcTemplate = jdbcTemplate;
   }

   @Override
   public int insertAnnouncement(UUID id, Announcement announcement)
   {
    final String sql = "INSERT INTO announcement (id, title, content, postdate, expiredate)\n VALUES(?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] {id, announcement.getTitle(), announcement.getContent(), announcement.getPostDate(), announcement.getExpireDate()});
   }

   @Override
   public List<Announcement> selectAllAnnouncements()
   {
    final String sql = "SELECT id, title, content, postDate, expireDate FROM announcement";
        List<Announcement> announcements = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID announcementId = UUID.fromString(resultSet.getString("id"));
            String title = resultSet.getString("title");
            String content = resultSet.getString("content");
            String postDate = resultSet.getString("postDate");
            String expireDate = resultSet.getString("expireDate");
            return new Announcement(
                announcementId,
                title,
                content,
                postDate,
                expireDate
            );
        });
        return announcements; 

   }

@Override
public Optional<Announcement> selectAnnouncementById(UUID id) {
    final String sql = "SELECT id, title, content, postDate, expireDate FROM announcement WHERE id = ?";
        Announcement announcement = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
            UUID announcementId = UUID.fromString(resultSet.getString("id"));
            String title = resultSet.getString("title");
            String content = resultSet.getString("content");
            String postDate = resultSet.getString("postDate");
            String expireDate = resultSet.getString("expireDate");
            return new Announcement(
                announcementId,
                title,
                content,
                postDate,
                expireDate
            );
        }, new Object[] {id});
        return Optional.ofNullable(announcement); 
}

@Override
public int deleteAnnouncementById(UUID id) {
    return 0;
}

@Override
public int updateAnnouncementById(UUID id, Announcement announcement) {
    return 0;
}
}
