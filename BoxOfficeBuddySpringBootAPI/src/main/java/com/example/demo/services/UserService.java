package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service

public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public User getById(int userid) {
		// TODO Auto-generated method stub
		return urepo.findById(userid).get();
		//return srepo.findById(s_id).get();
	}
	
	public List<User> getUserByRole(){
		return urepo.userbyrole();
	}
	
	
	public int deleteUser(int userId) {
		User us =urepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
		 urepo.delete(us);
		return userId;
		
	}

	public void approveUser(int userId) {
		User user = urepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setStatus(1);
        urepo.save(user);
	}

}
