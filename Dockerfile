FROM node:6.9.4 
MAINTAINER Francisco Manjón  
EXPOSE 80 
RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app  
ADD . /usr/src/app  
RUN npm install --production  
CMD ["npm", "start"]  
