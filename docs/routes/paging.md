# Paging(Pagination)

Pagination is a technique used to limit the number of results returned in a single query and to provide mechanisms for clients to request additional pages of results. 

This is useful when dealing with large datasets to improve performance and reduce the amount of data transferred over the network.

In Order to generate a ``graphql`` query in ``CAI`` , the ``UsePaging`` attritube needs to be introduced above the record or class.

```c#
[usePaging]
public record GetAllSamples;
```



### Connections

```SDL

 pageInfo: PageInfo!
  edges: [AllSamplesEdge!]
  nodes: [SampleEntry]
  totalCount: int!

```
#### Using DefaultPageSize

```c#
[usePaging](DefaultPageSize= 4)
public record GetAllSamples;
```

By setting the ``DefaultPageSize`` to 4, it means that when the GetAllSamples query is executed without specifying a page size, it will return up to 4 results per page.

### GraphQl Example

```graphql
query allsamps{
  allSamples(first: 2){
    nodes{
      text
      number
    }
    totalCount
  }
}
```

In the Example above 
``allSamples(first: 2)``: This is the entry point for the query, requesting a list of SampleEntry objects. 
The first argument specifies that you want to fetch the first 2 samples.

``nodes``: This field is used to access the individual nodes (objects) in the result set. Each node represents a SampleEntry object and contains:

``text``: The text property of the SampleEntry.

``number``: The number property of the SampleEntry.

``totalCount``: This field returns the total count of SampleEntry objects in the result set, regardless of pagination limits.

Overall, this query fetches the first 2 SampleEntry objects, along with their text and number properties, and also includes the total count of SampleEntry objects in the result set.






