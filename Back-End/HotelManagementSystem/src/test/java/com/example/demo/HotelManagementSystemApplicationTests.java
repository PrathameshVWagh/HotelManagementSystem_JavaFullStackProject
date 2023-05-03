package com.example.demo;




import java.text.ParseException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.dao.CustomerDao;

import com.example.demo.dao.OwnerDao;

import com.example.demo.entity.Owner;
import com.example.demo.entity.Customer;

@SpringBootTest
class HotelManagementSystemApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Autowired
	private OwnerDao ownerDao;
	@Test
	public void testCreate() throws ParseException
	{
		
		
		Owner o=new Owner();
	
		o.setOwnerId(10);
		o.setOwnerAddress("Satara");
		o.setOwnerContactNumber("8080101404");
		o.setOwnerEmailId("Parth.JJJ@gmail.com");
		o.setOwnerName("Ghansham");
     
		ownerDao.save(o);

	}
	
	
	@Autowired
	private CustomerDao customerDao;
	@Test
	public void customertestCreate() throws ParseException
	{
		
		
		Customer c=new Customer();
	
		c.setEmployeeId(10);
		c.setEmployeeName("Prathamesh");
		c.setEmployeeAddress("Phaltan");
		c.setEmployeeContactNumber("8080101404");
		c.setEmployeeEmailId("pasd@gmail.com");
		
     
		customerDao.save(c);

	}
	
	
	
	
	
	

}
