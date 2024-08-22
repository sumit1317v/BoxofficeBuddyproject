package com.example.demo.repositories;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
	
	@Modifying
	@Transactional
	@Query(value="update movies set movie_title= :movieTitle, movie_release_date= :movieReleaseDate, movie_duration= :movieDuration, movie_language= :movieLanguage,movie_category_id= :movieCategoryId WHERE movie_id= :movieId", nativeQuery = true)
	public int updateMovie(String movieTitle,Date movieReleaseDate, Time movieDuration,String movieLanguage,Integer movieCategoryId,Integer movieId);
	
	@Modifying
	@Transactional
	@Query(value="update movies set movie_banner_path= :file where movie_id= :id ",nativeQuery = true)
	public int uploadPhoto(int id,byte[] file);
	

	//search movie by title
	List<Movie> findBymovieTitleContainingIgnoreCase(String movieTitle);
}
