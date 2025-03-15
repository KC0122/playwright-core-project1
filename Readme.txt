---The plan is to create a Playwright core project-




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