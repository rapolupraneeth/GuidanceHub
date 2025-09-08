//package com.student.guide.exception;
//
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//
//import java.util.HashMap;
//import java.util.Map;
//import java.util.NoSuchElementException;
//
//@ControllerAdvice
//public class GlobalExceptions {
//
//
//    @ExceptionHandler(NoSuchElementException.class)
//    public Map<String, String> NoSuchElementException(NoSuchElementException noSuchElementException) {
//
//        Map<String, String> response = new HashMap<>();
//        response.put("error", "Details Not Found");
//
//        return response;
//    }
//    }
