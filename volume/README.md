> docker volume ls

> docker volume inspect data-volume

#create a new volume

> docker volume create test-vol

## notice the mountpoint

```
{
        "CreatedAt": "2018-10-10T03:22:08Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/test-vol/_data",
        "Name": "test-vol",
        "Options": {},
        "Scope": "local"
    }
```

#docker mount volume into container

> docker compose up

> docker volume inspect

# see what the volume looks like bind mounted
