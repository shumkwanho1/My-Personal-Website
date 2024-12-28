#connect VM
cd ~/.ssh
ssh -i "shum-perosonal-website-keypair.pem" ubuntu@ec2-54-169-104-81.ap-southeast-1.compute.amazonaws.com

# inside VM
sudo apt update
sudo apt upgrade

#copy file from local to VM (only the files has changed)
rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/shum-perosonal-website-keypair.pem" \
. ubuntu@ec2-54-169-104-81.ap-southeast-1.compute.amazonaws.com:~/personal-website

#install dependencies
npm install


