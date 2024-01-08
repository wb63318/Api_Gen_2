<!-- # GraphQl -->

# REST
In order to generate a RESTful endpoint with CAI, we need to use the `[Rest]` annotation
```c#
[Rest<T>(apiPath, httpVerb)]

```

| Fields | Datatype | Required |
| :---: | :---: | :----: |
| T | Generic | Yes |
| apiPath | String | Yes |
| httpVerb | GET, PUT, POST, DELETE, PATCH | Yes |


#### Example 1

```c#
[Rest<SampleEntry>("/api/sampleAction/get", Verb.Get)]
public record GetSample(string text);

```

<p>
    <img src ="../pics/get.png" alt="image">
</p>


#### Example 2

```c#
[Rest<SampleEntry>("/api/sampleAction/add", Verb.Post)]
public record AddSample(string text);



```

<p>
    <img src ="../pics/add.png" alt="image">
</p>


#### Example 3

```c#
[Rest<SampleEntry>("/api/sampleAction/delete", Verb.Delete)]
public record DeleteSample(int id);



```

<p>
    <img src ="../pics/delete.png" alt="image">
</p>

#### Example 4

```c#
[Rest<SampleEntry>("/api/sampleAction/id", Verb.Put)]
public record UpdateSample(int id, string text);



```

<p>
    <img src ="../pics/put.png" alt="image">
</p>

#### Example 5

```c#
[Rest<SampleEntry>("/api/sampleAction/id", Verb.Patch)]
public record EditSample(int id, string text);

```

<p>
    <img src ="../pics/patch.png" alt="image">
</p>