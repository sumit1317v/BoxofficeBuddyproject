package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TheatreScreenShow;

@Repository
public interface TheatreScreenShowRepository extends JpaRepository<TheatreScreenShow, Integer> {

@Modifying
@Query(value = "select * from theatre_screen_show where movie_id= :moveId",nativeQuery =true)
  public List<TheatreScreenShow> getshowbymoveid(int moveId);
 

}
