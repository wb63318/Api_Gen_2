# HOW IT WORKS

## PEREQUISITES
The following are the libraries required for a project to run using the CAI:

1. ASP .NET Core HotChocolate
2. Wolverine
3. Swashbuckle
4. CAI Analyzers
5. CAI Abstractions


Navigate to the csproj file and make the following modifications
```xml
<ItemGroup>
  <PackageReference Include="cai.analyzers" Version="0.0.6" OutputItemType="Analyzer" ReferenceOutputAssembly="false" />
  <PackageReference Include="cai.abstractions" Version="0.0.2" />
</ItemGroup>
```
After making the chnages above, we move to the Program.cs file to make the following additions

```c#

var builder = WebApplication.CreateBuilder(args); //this line already exists

builder.useCai(); //add this


var app = builder.Build(); // this line already exists

app.mapCai(); // add this


```

Voila! You can start using CAI in your project. Happy coding!!

