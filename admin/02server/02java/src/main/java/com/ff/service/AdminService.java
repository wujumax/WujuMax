package com.ff.service;


import com.ff.pojo.Admin;
import com.ff.pojo.Msg;

public interface AdminService {

	/**
	 * 管理员验证
	 * @param 管理员对象
	 * @return  验证数据
	 */
	Msg check(Admin a);
	 
	
}
