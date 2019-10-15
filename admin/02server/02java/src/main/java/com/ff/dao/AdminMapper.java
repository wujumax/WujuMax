package com.ff.dao;

import org.apache.ibatis.annotations.Mapper;
import com.ff.pojo.Admin;
@Mapper
public interface AdminMapper {
   
    /*
     * 登录
     */
    Admin check(Admin a);
    
}