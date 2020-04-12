$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Project/project.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 42,
  "name": "search for the special offers",
  "description": "",
  "id": "title-of-your-feature;search-for-the-special-offers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc03_sitemap"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user launches the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the user click on the sitemap",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "select special offers",
  "keyword": "And "
});
formatter.match({
  "location": "SiteMap.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 34988770976,
  "status": "passed"
});
formatter.match({
  "location": "SiteMap.the_user_click_on_the_sitemap()"
});
formatter.result({
  "duration": 1908367343,
  "status": "passed"
});
formatter.match({
  "location": "SiteMap.select_special_offers()"
});
formatter.result({
  "duration": 3300913739,
  "status": "passed"
});
});