package com.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
