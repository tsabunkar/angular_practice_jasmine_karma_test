# AngularTestingPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



===================================================================================================
Karama -> is test runner , used to run our test cases in browser (karma can be said as a luncher, which executes test cases in the browser) [which shows complete report of test cases passed or failed]

Jasimne -> is unit testing framework, using which we can write the test cases

Protractor -> is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.


------------------------------------------------------------------------------------------------------
To run test -> ng test
To run end to end test -> ng e2e

What ng test do -

-We write our test using Jasmine language
-We test our test with Browsers available using Karma
-We execute either unit or integrated testing
-all xxx.compnent.spec.ts run and a final report similar to JUnit is showed in browser


What ng e2e do - (End To End testing)

-We write our test using Jasmine language
-We test our test with many Browsers available using Karma
-We write our tests with nesting user event in mind
-We execute End to End test using protractor mainly after deployed the application a kind of pre-production environment
-the tests under e2e folder are triggered and the result is printed in command line console


--------------------------------------------------------------------------------------------------------
# ng test (Jasmine + Angular Testing Utilities tests launched through Karma)
-The aim is to check for single components (unit test) or several modules / components (integration tests)that a single function / small workflow is working correctly as intended without side effects.


# ng e2e (Jasmine + Protractor) :
-Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

-Here, the tests you have written will act as a user. This means, there is your application running in your browser, and another program will run the tests against your application, simulating a user interaction.

-The aim with protractor is to validate a full operationnal workflow in your application. 
For example, I'll write my unit test for my login component, write an unit test for my login service, write an integration test for my whole module and whatever behavior I need to test that depends on several components / services. Once this is done, I'll write later on a full end-to-end test that will validate my whole authentication process in my application.


--------------------------------------------------------------------------------------------------------
Isolated and Non-Isolated Test cases-

Isolated Test Cases - We can can test a custom directive or pipe or component or etc independetly
i.e - A custom pipe has a function which filters data, Now we need to write test case only for
this function which filters data this custome pipe is not dependent on any other compo

Non-Isolated Test Cases - When We inject a service into component, now consider we want to fetch table
data from backend service, thus here both r interpedent on each other (compo is dependent on service)

