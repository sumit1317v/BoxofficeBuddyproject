package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Theatre;

@Repository
public interface TheatreRepository extends JpaRepository<Theatre, Integer>  {

	
	@Modifying
    @Query(value="select * from theatre where user_id= :userId",nativeQuery =true)
	public List<Theatre> theatreByuser(int userId);
	
}
