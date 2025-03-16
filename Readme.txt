---Project(1).Playwright Basics--

Purpose: A basic demo to a beginner to understand the followings:

How to Set up the project by installing  dependencies like Node and NPM packages?
-How to install Playwright successfully ?
-How to run successfully those out of the box tests provided by Playwright?
-Write a basic test to launch a browser
-Navigate to a webpage(Example: BBC)
-It will check if a text exist or not (Example: BBC)



-How to Set up the project by installing all the dependencies ?

      -Install Nodejs LTS version from
      https://nodejs.org/en/download

            -Execute the .exe and installing
            -Open the command prompt as an admin
            -Issue command:    node -v and press ENTER
            -Issue command:    npm -v and press ENTER
            -If you see the version numbers appearing for each of the above commands.(i.e,if you have successfully installed Node!)
            (if not re-start the machine and re check!)
            
            -Createa a working directory/folder for the Playwright project and in the command prompt, CD into the same folder.
            -Create a folder annd install the latest NPM globally by issuing following commands..(Why NPM ?  It help us to install many software libraries and manage dependencies)
            -If successful you should be able to issue npm -v  command from directory and see the latest version number that you have just installed!


 -How to install Playwright successfully ?
      -All set to Install Playwright! Create a folder for the project and provid a suitable name. In my case its D:\Myprojects\playwright-core-project1
      -CD into this same folder in Command prompt
      -Double check by re issuing node -v & npm -v one after another, to see if they are still working or not.
      (Note in some machines the VSCode terminal window might give you an error if you issue the npm -v command.But in a command prompt as an admin, you should be able to see the version)
      
      -If all good, now issue the below command to install the latest Playwright version
         npm init playwright@latest
      -
       During the installation, it will ask few questions and after entering "Y" for the first question,
         keep pressing 'Enter' to go ahead with the defaults values.
         Once done, you should see below message on the command prompt
         
         Visit https://playwright.dev/docs/intro for more information. ✨

         Happy hacking! 🎭




--Steps to push the project via SSH to the repo-

How to set up SSH ?

-Open Gitbash
-Paste the command below enter
 ssh-keygen -t ed25519 -C "your_email@example.com"

Note:Don't make the mistakes that i made..your email address should be within double quotes
     Also remember once the keys are generated ,to add them to SSH Agent in your machine


How to add your key to SSH Agent?

in the same Gitbash window, issue the below command
  eval "$(ssh-agent -s)"

Once entered, you will see a message like.
Agent pid 1330

Now we are going to addthe key by issuing the below command and press enter
ssh-add ~/.ssh/id_ed25519

If successful, you should see a message like below
Identity added: /c/Users/User/.ssh/id_ed25519 (youremail@address)

-Now we are going to copy that public key by issuing below command(this is for windows)
clip < ~/.ssh/id_ed25519.pub

-Now make sure you open your github account
-Click on Profile icon
-Click on Settings
-Click on SSH and GPG keys
(if you see old keys, you can delete them)
-Click on New SSH key button
-Provide a name
-Paste the key in the text area.Now you should see the value that you have copied above, is pasted
-Finally, click save!

-Test now if your PC can successfully connect with git hub via SSH by issuing below command and press enter.
ssh -T git@github.com

-You might see a message like below
Hi XXXX! You've successfully authenticated, but GitHub does not provide shell access.


-It will prompt you to enter the location /directory
-Once done, it will generate 2 files.One is private the other is public
-Open the public key file, copy the value
-Open your git hub account
-Click on Profile picture
-Cick on Settings options
-Click on SSH and GPG keys option
-Click on New SSH key button
-Provide a name
-Paste the public key value and Save!


How to push your project?

-As ususal first issue the below command to start your local repo
 git init

-Then you you Add the files to be pushed  
ex:   git add Readme.txt

-Then Commit this file to your local repo by issuing the below command  
      git commit -m "Playwright core project- pushing via SSH"

-If successful, issue the below command to see the commit id   
      git log

- git remote add origin git@github.com:KC0122/playwright-core-project1.git

Finally to push
- git push -u origin -main


***********************************************************
Git Push Related Errors & Lessons Learned
**************************************************************

-Whn trying to push your changes , if youever see a list of git errors as per below.

"
! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'github.com:XXX/playwright-core-project1.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details."



To fix this simply follow the below commands:

1). git fetch origin main:temp    PRESS ENTER
2). git rebase temp               PRESS ENTER
3).git push origin HEAD:main      PRESS ENTER

Then you should see that your changes are appearing in your github repo.
