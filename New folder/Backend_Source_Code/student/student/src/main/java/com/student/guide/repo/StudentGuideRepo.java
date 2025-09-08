package com.student.guide.repo;

import com.student.guide.model.StudentGuide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentGuideRepo extends JpaRepository<StudentGuide, Integer> {

    //@Query(value = "select email from student_guide where email =?1", nativeQuery = true)
    public Optional<StudentGuide> findByEmail(String email);

   // @Query(value = "select password from student_guide where password =?1", nativeQuery = true)
    public Optional<StudentGuide> findByPassword(String password);



}
