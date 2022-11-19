package com.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsmeta.entities.Sale;
import com.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleResitory;

	public List<Sale> findAllSales() {
		return saleResitory.findAll(); 
	}
	
//	public Sale findSaleById(Long id) {
//		return saleResitory.getById(id); 	
//	}
}
