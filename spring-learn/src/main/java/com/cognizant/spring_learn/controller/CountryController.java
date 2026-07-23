
// package com.cognizant.spring_learn.controller;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;

// import org.springframework.context.ApplicationContext;
// import org.springframework.context.support.ClassPathXmlApplicationContext;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.cognizant.spring_learn.Country;

// @RestController
// public class CountryController {

//     private static final Logger LOGGER =
//             LoggerFactory.getLogger(CountryController.class);

//     @RequestMapping("/country")
//     public Country getCountryIndia() {

//         LOGGER.info("START - getCountryIndia()");

//         ApplicationContext context =
//                 new ClassPathXmlApplicationContext("country.xml");

//         Country country = context.getBean("country", Country.class);

//         ((ClassPathXmlApplicationContext) context).close();

//         LOGGER.info("END - getCountryIndia()");

//         return country;
//     }
// }

//Exercise 2
package com.cognizant.spring_learn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {

        LOGGER.info("START - getCountry()");

        Country country = countryService.getCountry(code);

        LOGGER.info("END - getCountry()");

        return country;
    }
}