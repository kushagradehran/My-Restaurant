package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Dish {
	
	@Id
	private int dishid;
	private String dishname;
	private double dishprice;
	
	public Dish() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Dish(int dishid, String dishname, double dishprice) {
		super();
		this.dishid = dishid;
		this.dishname = dishname;
		this.dishprice = dishprice;
	}

	public int getDishid() {
		return dishid;
	}

	public void setDishid(int dishid) {
		this.dishid = dishid;
	}

	public String getDishname() {
		return dishname;
	}

	public void setDishname(String dishname) {
		this.dishname = dishname;
	}

	public double getDishprice() {
		return dishprice;
	}

	public void setDishprice(double dishprice) {
		this.dishprice = dishprice;
	}
	
}
