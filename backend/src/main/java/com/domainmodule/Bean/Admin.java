package com.domainmodule.Bean;

import jakarta.persistence.*;

//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.ObjectWriter;

@Entity
@Table(name = "admin")
public class Admin {
    @Id
    @Column(name = "admin_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admin_id;

    @Column(name = "email",nullable = false,unique = true)
    private String email;

    @Column(name = "password",nullable = false)
    private String password;

    public Admin() {
    }

    public Admin(int admin_id, String email, String password) {
        this.admin_id = admin_id;
        this.email = email;
        this.password = password;
    }

    public int getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(int admin_id) {
        this.admin_id = admin_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public String toString() {
//        try {
//            ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
//            String json = ow.writeValueAsString(this);
//            return json;
//        }
//        catch (JsonProcessingException e) {
//            throw new RuntimeException(e);
//        }
//    }

}
