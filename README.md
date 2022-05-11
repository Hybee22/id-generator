# ID-Generator

This controller logic `creates/generates` unique numeric ids.

```
POST /api/v1/generate

The endpoint accepts optional parameters, start and machineId. The 'start' parameter allows easy configuration of a starting point for the generated id, while the 'machineId' parameter is advisable to allow differentiation which instance is generating the id.
```

```json
{
  "start": "2015-01-01",
  "machineId": ""
}
```

```
The start parameter is a date which would internally be converted into a timestamp (2^41ms) which provides about 69 years lifespan
```

```
The machineId parameter can be a numeric value or a mac address of the originating machine. Using this parameter allows the generation of a more unique id per machine/server.
```
