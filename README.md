# Erasys JavaScript Trial Task,
completed by Esben Holk @ https://github.com/esbenholk/react-express-starter/tree/erasys-trial

a react native application calling a data from local express server

Each user item shows the following data:

- Username 
- Age
- Image
- Location and distance
- Headline
- Relative last login time (e.g. 6 minutes ago)
- In case of missing image-upload: a default picture. 


Includes:

- fetch data as event.handler of scroll
- distance and time calculation
- flex-box grid


Notes: 
I worked on the applciation occasionally and sporadically across several days in between other jobs, and dicovered in each AFK session that there was a more "scalable" method to go about creating a grid of users, which allowed me to test ways and create mistakes before rendering the dynamic grid which is ready now. Notably, the effort of calculating time since last_login was completely changed due to September coming about and proving my previous method (including a series of "if" sentences and a parsed time string) useless. The most recent time calculation now uses .toISOString() to create two comparable durations of time in milliseconds. 

The current version is merged with branch "infinitescroll" in which the eventhandler(scroll, fetchData) was developed as way of continously getting users. 



Use:

$ git clone -b erasys-trial https://github.com/esbenholk/react-express-starter.git
cd erasys-trial
npm install
cd client
npm install
cd ..

yarn dev



