package com.example.junit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAAPatternTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up test...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
        calculator = null;
    }

    @Test
    public void testMultiply() {

        // Arrange
        int firstNumber = 4;
        int secondNumber = 5;

        // Act
        int result = calculator.multiply(firstNumber, secondNumber);

        // Assert
        assertEquals(20, result);
    }
}