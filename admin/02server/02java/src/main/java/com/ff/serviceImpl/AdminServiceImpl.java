package com.ff.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ff.dao.AdminMapper;
import com.ff.pojo.Admin;
import com.ff.pojo.Msg;
import com.ff.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminMapper adminMapper;

	@Override
	public Msg check(Admin admin) {
		Msg msg = new Msg();
		if (adminMapper.check(admin) != null) {			
			msg.setCode(1);
			msg.setMsg("合法用户");
			return msg;
		}
		return msg;
	}

}
