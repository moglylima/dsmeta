package com.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dsmeta.entities.Sale;
import com.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleRepository;

	public Page<Sale> getAllSalesPageable(Pageable pageable, String minDate, String maxDate) {

//		 min || max == ""
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today:  LocalDate.parse(maxDate);

		return saleRepository.findSales(pageable, min, max);
	}

//	public Sale findSaleById(Long id) {
//		return saleResitory.getById(id); 	
//	}
}
