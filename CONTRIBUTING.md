# Contributing guidelines for feathers-community-hooks

We would love for you to contribute code and help make Feathersjs even more productive than it is
today! Here are some guidelines we would like you to follow:

 - [How to](#submit)
 - [Coding](#rules)

## <a name="submit"></a> How to

* Search for an open or closed PR that relates to your submission.
You don't want to duplicate effort.

### <a name="submit-pr"></a> Submit your Pull Request

* [Fork](https://guides.github.com/activities/forking/) `feathers-community-hooks`.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-hook-branch master
     ```

* Create your hook in file /src/my-hook.js.
Use [kebab case](http://wiki.c2.com/?KebabCase) file names.
* Follow the
[hook writing convesntions](https://docs.feathersjs.com/guides/step-by-step/basic-feathers/writing-hooks.html).

* Create your test in file /test/my-hook.test.js.
* Follow the
[test writing suggestions](https://docs.feathersjs.com/guides/step-by-step/basic-feathers/testing-hooks.html).
* If you must configure a Feathers service, configure a memory based one.
* The NeDB adapter should not be used in tests as it cannot be opened more than once in a process.

* Categorize your hook in the README.
Hooks of a general nature should be mentioned in the
[concern](https://stackoverflow.com/questions/23700540/cross-cutting-concern-example)
they address.
Hooks useful for specific industries should be categorized by industry.

* Follow our [Coding Rules](#rules).
* Run the full test suite with `npm test` and ensure that all tests pass.
* Commit your changes using a descriptive commit message.

     ```shell
     git commit -m "Added hook my-hook which ..."
     ```

* Push your branch to GitHub:

    ```shell
    git push origin my-hook-branch
    ```

* In GitHub, [send a pull request](https://help.github.com/articles/creating-a-pull-request/).
* If a change is suggested then:
  * Make the required updates.
  * Re-run the test suite to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub:

    ```shell
    git push origin --delete my-hook-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-hook-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Code

The most important need is that all code changes and contributions have unit tests.

* Place unit tests in `/test`. They should require their code from `/lib`.
* Unit tests should not require a build step. Feel free to use the latest Nodejs syntax.
* The repo is set up to use Mocha and Chai.
* `npm test` will build, lint and test.
This command needs to complete successfully before you submit a PR.
* Linting is performed using [ESLint](http://eslint.org/) with the
[semistandard](https://github.com/Flet/semistandard) rule set.
This checks for good standards without being oppressive.
All Feathers modules use this.

The build:

* Add your code to `/src`. The build step expands it into `/lib`.
* Babel is set up to use plugin babel-preset-es2015.
