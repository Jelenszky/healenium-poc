Feature: Healenium self-healing tests - Xpath

  Scenario: 1. XPath with special characters - Healing Locators _1
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "//*[@id='change:name']" locator should be visible

    When The "//*[@id='change:name']" input field is filled with "HLM_XPath_#1"
    And The "button[id='Submit']" locator is clicked
    Then The "//*[@id='change:name']" locator should be visible

  Scenario: 2. XPath Following - Healing Locators _2
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "//*[@id='change_className']/following::test_tag" locator should be visible

    When The "#descendant_change > test_tag ~ input" input field is filled with "HLM_XPath_#2"
    And The "button[id='Submit']" locator is clicked
    Then The "//*[@id='change_className']/following::test_tag" locator should be visible

  Scenario: 3. XPath Contains - Healing Locators _3
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "//input[contains(@class, 'test')]" locator should be visible

    When The "//input[contains(@class, 'test')]" input field is filled with "HLM_XPath_#3"
    And The "button[id='Submit']" locator is clicked
    Then The "//input[contains(@class, 'test')]" locator should be visible


