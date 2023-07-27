package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Details {
	
	@Id
	@GeneratedValue
	private int contact_id;
	private String name;
	private Long phoneNo;
	private String email;
	private String project;
	private String tecnologies;
	private String discription;
	private String projectUrl;
	private String skills;
	private String college;
	private String cgpa;
	
	
	
	public Details(int contact_id, String name, Long phoneNo, String email, String project, String tecnologies,
			String discription, String projectUrl, String skills, String college, String cgpa) {
		super();
		this.contact_id = contact_id;
		this.name = name;
		this.phoneNo = phoneNo;
		this.email = email;
		this.project = project;
		this.tecnologies = tecnologies;
		this.discription = discription;
		this.projectUrl = projectUrl;
		this.skills = skills;
		this.college = college;
		this.cgpa = cgpa;
	}



	public int getContact_id() {
		return contact_id;
	}



	public void setContact_id(int contact_id) {
		this.contact_id = contact_id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public Long getPhoneNo() {
		return phoneNo;
	}



	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getProject() {
		return project;
	}



	public void setProject(String project) {
		this.project = project;
	}



	public String getTecnologies() {
		return tecnologies;
	}



	public void setTecnologies(String tecnologies) {
		this.tecnologies = tecnologies;
	}



	public String getDiscription() {
		return discription;
	}



	public void setDiscription(String discription) {
		this.discription = discription;
	}



	public String getProjectUrl() {
		return projectUrl;
	}



	public void setProjectUrl(String projectUrl) {
		this.projectUrl = projectUrl;
	}



	public String getSkills() {
		return skills;
	}



	public void setSkills(String skills) {
		this.skills = skills;
	}



	public String getCollege() {
		return college;
	}



	public void setCollege(String college) {
		this.college = college;
	}



	public String getCgpa() {
		return cgpa;
	}



	public void setCgpa(String cgpa) {
		this.cgpa = cgpa;
	}



	public Details() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}