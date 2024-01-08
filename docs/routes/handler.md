<!-- # GraphQl -->

# GraphQl

### Handlers
After generating the queries, mutations and REST endpoints, it is time to implement functions to serve those queries, mutations and REST enpoints.
This is how the syntax looks like:
```c#
public Task<SampleEntry[]> Handle(<Query class or record>)
```

The function name should be `Handle` and it should take an instance of the query class or record as an argument
Let's take some examples:


#### Example 1

```c#
//The query
[Query<SampleEntry[]>()]
public record GetAllSamples(string text, int num);

//Its handler
public static Task<SampleEntry[]> Handle(GetAllSamples input){
    // implementation goes here
}
```




#### Example 2

```c#
//The mutation
[Mutation<string>()]
public record AddSample(string text);

//Its handler
public static Task<SampleEntry[]> Handle(AddSample input){
    // implementation goes here
}
```


#### Example 3

```c#
//RESTful GET
[Rest<Profile[]>("/api/entries/get", Verb.Get)]
public record GetAllSamples(string text, int num);

//Its handler
public static Task<SampleEntry[]> Handle(GetAllSamples input){
    // implementation goes here
}
```


#### Example 4

```c#
//RESTful POST
[Rest<Profile[]>("/api/entries/add", Verb.Post)]
public record AddSample(string text);

//Its handler
public static Task<SampleEntry[]> Handle(AddSample input){
    // implementation goes here
}
```
