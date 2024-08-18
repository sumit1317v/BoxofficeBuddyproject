package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserControllers {
	
	@Autowired
	UserService uservice;

	@GetMapping("/getuserbyrole")
	public List<User> getTheatreowner(){
	return uservice.getUserByRole();
}


  @DeleteMapping("/deleteuser/{id}")
   public int deleteUser(@PathVariable int id){
	  return uservice.deleteUser(id);
   }
  
  //http://localhost:3000/approveuser/1
  @PutMapping("/approveuser/{id}")
  public void apprrovUser(@PathVariable int id) {
	  uservice.approveUser(id);
  }
// @DeleteMapping("/{id}")
//    public void deleteUser(@PathVariable int id) {
//        uservice.deleteUser(id); // Delete the user from the database
//    }
  
    //http://localhost:3000/approveuser/1
   
	
}
