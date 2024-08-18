package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Theatre;
import com.example.demo.repositories.TheatreRepository;

@Service
public class TheatreService {
	@Autowired
	
	TheatreRepository trepo;

	public List<Theatre> getAllTheatre() {
		
		return trepo.findAll();
	}

	public Theatre saveTheatre(Theatre th) {
	
		return trepo.save(th);
	}

	
	  public void deleteTheatre(Theatre th) throws Exception {
	        if (trepo.existsById(th.getTheatreId())) {
	            trepo.delete(th);
	        } else {
	            throw new Exception("Theatre not found.");
	        }
	    }

	public Theatre getTheatreById(int theatreId) {
		Optional<Theatre> otheatre=trepo.findById(theatreId);
		Theatre theat=null;
		try {
			theat=otheatre.get();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return theat;
	}
	
//	public List<PersonalExpenditure> getExpenses(int uid){
//		return pexpenditurerepo.expensesByUid(uid);
//	}
	
	public List<Theatre> getTheatre(int userId){
		return trepo.theatreByuser(userId);
	}

	public Theatre getById(Integer theatreid) {
		// TODO Auto-generated method stub
		return trepo.findById(theatreid).get();
	}

	
	
	


}
