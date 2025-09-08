package com.student.guide.service;

import com.student.guide.model.StudentGuide;
import com.student.guide.repo.StudentGuideRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentGuideService {

    @Autowired
    StudentGuideRepo studentGuideRepo;

    public StudentGuide registerStudent(StudentGuide studentGuide) {
        return studentGuideRepo.save(studentGuide);
    }

    public String logIn(String email, String password) {

        String response;

        Optional<StudentGuide> emailFromDB = studentGuideRepo.findByEmail(email);
        Optional<StudentGuide> passwordFromDB = studentGuideRepo.findByPassword(password);
        //System.out.println(emailFromDB.get().getEmail() + passwordFromDB.get().getPassword());
        if (emailFromDB.get().getEmail().equals(email) && passwordFromDB.get().getPassword().equals(password) && emailFromDB != null && passwordFromDB != null) {
            response = "login success";
        } else {
            response = "login faild";
        }
        return response;
    }

}
