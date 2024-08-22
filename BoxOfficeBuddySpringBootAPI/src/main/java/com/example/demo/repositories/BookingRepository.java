package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	
	@Query(value = "SELECT * FROM booking WHERE user_id = :user_id", nativeQuery = true)
    List<Booking> findByUserId(@RequestParam("user_id") int user_id);
  
     @Query(value="SELECT * FROM booking WHERE show_id=:show_id",nativeQuery = true)
     List<Booking> findByShowId(@RequestParam("show_id")int show_id);


}
