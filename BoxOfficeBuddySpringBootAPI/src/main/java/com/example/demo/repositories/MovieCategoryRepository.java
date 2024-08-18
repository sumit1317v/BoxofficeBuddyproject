package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.MovieCategory;

@Repository
public interface MovieCategoryRepository extends JpaRepository<MovieCategory, Integer> {
	
	@Modifying
	@Transactional	
	@Query(value="update movie_category set movie_category= :movieCategory, movie_description= :movieDescription WHERE movie_category_id= :movieCategoryId", nativeQuery = true)
	public int updateMovieCategory(String movieCategory,String movieDescription,Integer movieCategoryId);

}
