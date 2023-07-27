package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Educations")
public class Education {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
    @JoinColumn(name = "user_id")
	private User user;
	private String degree;
	private String CGPA;
	private String CollegeName;
	public Education() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Education(int id, String degree, String cGPA, String collegeName) {
		super();
		this.id = id;
		this.degree = degree;
		CGPA = cGPA;
		CollegeName = collegeName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getCGPA() {
		return CGPA;
	}
	public void setCGPA(String cGPA) {
		CGPA = cGPA;
	}
	public String getCollegeName() {
		return CollegeName;
	}
	public void setCollegeName(String collegeName) {
		CollegeName = collegeName;
	}

}
