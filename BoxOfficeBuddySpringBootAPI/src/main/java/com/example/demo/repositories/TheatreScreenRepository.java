package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TheatreScreen;

@Repository
public interface TheatreScreenRepository extends JpaRepository<TheatreScreen, Integer>{

	@Modifying
    @Query(value="select * from theatre_screens where theatre_id= :theatreId",nativeQuery =true)
	public List<TheatreScreen> screenBytheatre(int theatreId);
}
