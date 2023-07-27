package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Projects")

public class Project {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
    @JoinColumn(name = "user_id")
	private User user;
	
	private String title;
	private String description;
	private String tecnologies;
	private String url;
	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Project(int id, String title, String description, String tecnologies, String url) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.tecnologies = tecnologies;
		this.url = url;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTecnologies() {
		return tecnologies;
	}
	public void setTecnologies(String tecnologies) {
		this.tecnologies = tecnologies;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

}
