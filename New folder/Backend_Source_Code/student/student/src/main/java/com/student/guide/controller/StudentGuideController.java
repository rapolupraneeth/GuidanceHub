package com.student.guide.controller;

import com.student.guide.model.SignInRequest;
import com.student.guide.model.StudentGuide;
import com.student.guide.service.StudentGuideService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentGuideController {

    @Autowired
    StudentGuideService studentGuideService;

    @PostMapping("/signup")
    public StudentGuide registerStudent(@RequestBody StudentGuide studentGuide) {
        return studentGuideService.registerStudent(studentGuide);
    }

    @PostMapping("/signin")
    public String logIn(@RequestBody SignInRequest SignInRequest) {
        String email = SignInRequest.getEmail();
        String password = SignInRequest.getPassword();

        return studentGuideService.logIn(email, password);
    }
}
