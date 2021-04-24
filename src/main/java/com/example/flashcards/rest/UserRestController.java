package com.example.flashcards.rest;

import com.example.flashcards.entity.User;
import com.example.flashcards.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/login")
public class UserRestController {
    private UserService userService;

    @Autowired
    public UserRestController(UserService theUserService){userService = theUserService;}

    @PostMapping("/create_user")
    public User addUser(@RequestBody User theUser){
        theUser.setId(0);
        userService.save(theUser);
        return theUser;
    }

    @GetMapping("/credentials/{userId}")
    public User getUser(@PathVariable int userId){
        User theUser = userService.findById(userId);
        if(theUser == null){
            throw new RuntimeException("User id not found - "+userId);
        }
        return theUser;
    }
}
