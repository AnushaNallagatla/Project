package com.cts.TestRunner;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Project/project.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report",
				"json:target/cucumber.json ",
		         "junit:target/cucumber.xml"},
		tags = {"@tc05_EditAcnt"},
		glue = {"com.cts.Stepdefinition"}
		
		)
public class EditAcntRunner {

}

