package com.demo.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Dish;
import com.demo.exception.ResourceNotFoundException;
import com.demo.repository.DishRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DishController {
	
	@Autowired
	private DishRepository drepository;
	
	@PostMapping("/insertdish")
	public Dish insertdish(@RequestBody Dish d1) throws Exception {
		this.drepository.save(d1);
		return d1;
	}
	
	@PostMapping("/updatedish")
	public Dish updatedish(@RequestBody Dish d2) {
		return this.drepository.save(d2);
	}
	
	@DeleteMapping("/deletedish/{id}")
	public ResponseEntity<Map<String, Boolean>> deletedish(@PathVariable int id) {
		Dish dish = drepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Dish not exist with id :" + id));
		
		drepository.delete(dish);
		Map<String, Boolean> response = new HashMap();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	@GetMapping("/viewdish")
	public java.util.List<Dish> viewdish()
	{
		return drepository.findAll();
	}

}
