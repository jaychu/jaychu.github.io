# JustinChu.com

Managing content using Strapi locally and rendering it all on NextJS, this repo is the final product of of all these technologies exported into the repo. That being said, there are some growing pains that need to be documented in order to remember changes that will need to be made for exporting.

## Exporting Images
Images remain in the local host domain in the application. Need to remember to find a way to change the localhost:1337 to /REPO/uploads. The uploads is also not maintained automatically by next, so manual intervention could be required unless we extend the export command to include uploads as well. 

## _next folder
Github Pages doesn't seem to like _next folder, perhaps the _ is being indicated as a hidden folder. As a result, need to find a way to manually modify _next to next in order to accomodate. Will also need to update all paths correspondingly
