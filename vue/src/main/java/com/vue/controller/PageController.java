package com.vue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
	
	@RequestMapping("/page/novo")
	public String novo() {
		return "index";
	}

}
