# Sorting

The term ``sorting`` in CAI means the ability to order results of a query dynamically.
The order can be ``ASCENDING`` AND ``DESCENDING``.
### SampleQuery 

```c#
[Query<IQueryable<SampleEntry>>(useSorting=true)]
public record GetAllSamples;

```

**NB** 
By enabling the ``[useSorting=true]``, the system creates the ``SortEnumType``  which contains the ``ASC`` AND ``DESC`` values.

It also creates ``Input Objects`` of types:

**1.** ``SampleEntrySortInput``

### SampleHandler

```c#

public static async Task<IQueryable<SampleEntry>> Handle(GetAllSamples input, ILogger<SampleHandler> logger, CancellationToken cancellationToken)
{
    try{
        return Enumareble>Range(1,10)
        .Select(x=> new SampleEntry($"Text {x}", x))
        .AsQueryable();
    }
    catch(Exception e){
        // todo: log this
        throw;
    }
}

```

#### GraphQl Query Example

```graphQl

query allsamps{
    allSamples(order: {number:ASC})
    {
        number
        text
    }
}

```
