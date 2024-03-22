# Projection

Projections refer to the ability to specify exactly which fields of an object should be included in the response.

 This allows clients to request only the data they need, reducing the amount of data transferred over the network and improving performance.

## SampleQuery 

**NB**

``useProjection`` does not work with records but rather functions properly when implemented on classes.

```c#

public IQueryable<User> GetUsers([ScopedService] SomeDbContext someDbContext)
    {
        return someDbContext.Users;
    }

```



### GraphQl Example

```graphql
query {
  users {
    id
    name
    email
  }
}


```