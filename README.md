# Insurance PoC

## How to use

### Docker compose
There is prepared docker-compose file for running all the application containers.

You just need to modify your local dns hosts file located in:

* **Linux & Mac** - */etc/hosts*

* **Win**: - *C:\Windows\System32\drivers\etc\hosts*

Add this two lines to your hosts file:

```
	127.0.0.1	insurance.local
	127.0.0.1	mongo.insurance.local	
```

Now you can run
```
    $ docker-compose up -d
```
and application should be accessible on **http://insurance.local/products**.

*Note: see the docker-compose.yml to find out all URLs which application running on.*

### Mongo DB
**Credentials**: root/root

There is also UI for MongoDB (mongo express) which is running on **http://mongo.insurance.local**

### Docker for FO development
In frontend parts of application are prepared docker compose files for development.
These docker files starts two containers, one with webpack dev server and one with jest in watch mode.

If you start containers by

```
docker-compose up
```

then you should see potentially compile errors and failing unit tests in one terminal window.