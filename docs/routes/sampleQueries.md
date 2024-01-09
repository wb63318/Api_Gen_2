# SAMPLE QUERIES

## 1. SampleEntry
 This record  contains the input needed for queries in all other records in this service.
 

###  Sample Entry Properties
| Fields | DataType | 
|:---: | :---: | 
| text| String |
| number| int |

## 2. Sample Queries
- This contains a list of records which are defined as both `RESTFUL API ENDPOINTS` and `GRAPHQL Queries/Mutations`  
- All `Endpoints` are annotated with an array of **SampleEntries**
- `Endpoint` routes are also included in the attribute 
- It return an array of sample entries



### GetAllSamples
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |
| num| int | Yes |

 

### GetSamples
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |
| cnt| int | No |



### SampleAction Get
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |

### SampleAction Post
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |

### SampleAction Delete
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |

### SampleAction Put
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |

### SampleAction Patch
| Fields | DataType | Required|
|:---: | :---: | :---: |
| text| String | Yes |




