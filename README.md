The following are git commands for:

1. Staging a change: Once you navigate to the directory / repo of your choice, you perform all necessary tasks, you can stage a chnage by using the commands 'git add <filename>' for one specific file or 'git add .' for multiple files.

2. Committing and change: After saving the files with git add, you can commit files with the command 'git commit -m' where '-m' means add a message that will be recognisee by the repo as a sort of note to distinguish one file or several files from others.

3. Pushing a committed change: You can then send the added and committed files to the git hub repo using the commands 'git push'.

If all the steps are done correctly and the files are pushed to the repo, you should get an output message similar to the following:

Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 500 bytes | 500.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To <remote_repository_url>
   abc1234..def5678  main -> main

If there are any errors or issues during the push, the output may contain error messages or warnings explaining the problem.

It's important to review the output after a push operation to ensure that the files were successfully pushed to the desired branch in the remote repository.
