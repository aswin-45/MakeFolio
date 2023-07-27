package com.example.demo.Repositories;

import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Details;

@Repository
public interface ContactRepository extends JpaRepository<Details,Integer> {

	Details findByEmail(String email);

	

}