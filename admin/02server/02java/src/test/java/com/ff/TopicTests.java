package com.ff;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TopicTests {
	@Autowired
	//private TopicMapper topicMapper;

	@Test
	public void topicsTest() {
		//List<Topic> list = topicMapper.selectTopics();
		//System.out.println(list.size());
	}
}
