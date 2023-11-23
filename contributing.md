Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.
Issues and PRs

If you have suggestions for how this project could be improved, or want to report a bug, open an issue! We'd love all and any contributions. If you have questions, too, we'd love to hear them.

We'd also love PRs. If you're thinking of a large PR, we advise opening up an issue first to talk about it, though! Look at the links below if you're not sure how to open a PR.
Submitting a pull request

    [Fork][fork] and clone the repository.
    Configure and install the dependencies.
    Make sure the tests pass on your machine.
    Create a new branch: git checkout -b my-branch-name.
    Make your change, add tests, and make sure the tests still pass.
    Push to your fork and submit a pull request.
    Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

    Follow the style which is using standard.
    Write and update tests.
    Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
    Write a good commit message.

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocked you.
GIT AND GITHUB

Before continuing we want to clarify the difference between Git and Github. Git is a version control system(VCS) which is a tool to manage the history of our Source Code. GitHub is a hosting service for Git projects.

We assume you have created an account on Github and installed Git on your System.

Now tell Git your name and E-mail (used on Github) address.

 $ git config --global user.name "YOUR NAME"
 $ git config --global user.email "YOUR EMAIL ADDRESS"

This is an important step to mark your commits to your name and email.
FORK A PROJECT -

You can use github explore - https://github.com/explore to find a project that interests you and match your skills. Once you find your cool project to workon, you can make a copy of project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

Click on fork to create a copy of project to your account. This creates a separate copy for you to workon.
FINDING A FEATURE OR BUG TO WORKON -

Open Source projects always have something to workon and improves with each new release. You can see the issues section to find something you can solve or report a bug. The project managers always welcome new contributors and can guide you to solve the problem. You can find issues in the right section of project page.

CLONE THE FORKED PROJECT -

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

$ git clone https://github.com/<your-account-username>/<your-forked-project>.git
Now you have the project on your local machine.
ADD A REMOTE (UPSTREAM) TO ORIGINAL PROJECT REPOSITORY

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

$ cd <your-forked-project-folder>
$ git remote add upstream https://github.com/<author-account-username>/<project>.git

You will see the benefits of adding remote later.
SYNCHRONIZING YOUR FORK -
