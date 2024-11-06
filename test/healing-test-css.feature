Feature: Healenium self-healing tests - CSS

  Scenario: 1. CSS Id - Healing locators _2
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "#change_id" locator should be visible

    When The "#change_id" input field is filled with "HLM_Css_#2"
    And The "button[id='Submit']" locator is clicked
    Then The "#change_id" locator should be visible

  Scenario: 2. CSS Element - Healing locators _3
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "test_tag" locator should be visible

    When The "test_tag ~ input" input field is filled with "HLM_Css_#3"
    And The "button[id='Submit']" locator is clicked
    Then The "test_tag" locator should be visible

  Scenario: 3. CSS Disabled - Healing locators _4
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "input:disabled" locator should be visible

    When The "button[id='Submit']" locator is clicked
    Then The "input:disabled" locator should be visible

  Scenario: 4. CSS Disabled - Healing locators _5
    Given I opened the "https://elenastepuro.github.io/test_env/index.html" page
    Then The text of "Healenium Test Fields" is visible
    And The "textarea:enabled" locator should be visible

    When The "textarea:enabled" input field is filled with "HLM_Css_#5"
    And The "button[id='Submit']" locator is clicked
    Then The "textarea:enabled" locator should be visible


