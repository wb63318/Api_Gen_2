# Filtering


The term ``filtering`` in CAI refers to the ability to  specify criteria for selecting a subset of data from a larger set of data.

 It allows clients to request only the data that meets certain conditions.


## SampleQuery 

To implement filtering in CAI , we must make sure we implement the ``IQueryable<T>`` followed by ``useFiltering=true``above the class or record.

```c#
[Query<IQueryable<SampleEntry>>(useFiltering=true)]
public record GetAllSamples;

```

**NB** 
By enabling the ``[useFiltering=true]``, the system creates ``Input Objects`` of types

**1.** IntOperationFilter

**2.** SampleEntryFilterInput

**3.** StringOperationFilterInput



## SampleHandler

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

### GraphQl Example

query allsamps{
    allSamples(where: {number: {gt:7})
    {
        number
        text
    }
}

```