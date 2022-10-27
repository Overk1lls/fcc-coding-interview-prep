## Normal Google Coding Interview questions

These questions are from [this video](https://www.youtube.com/watch?v=rw4s4M3hFfs) by Clément Mihailescu.

As far as I got them right, of course.

### Question #1

There are blocks that represent apartments. Every apartment has one or many buildings (specified in requirements).
For example, given requirements are `['gym', 'school', 'store']` - an array of some buildings.
Each apartment is essentially a list and has those objects as its keys. The value of the key is a boolean.

**Question**: find an apartment with a minimal distance to every building in the requirements.
For example, let's take this input:

```
const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
]

const reqs = ['gym', 'school', 'store'];
```

The **answer** will be the apartment with an index of 3. It has a school on its own (`school: true`),
and its neighbors have two other buildings (gym above and store below).

### Question #2

There is an array of lists. Each list has some trues and some falses, always starting with true and ending with false.  
Each list has some percentage of its successes (comparing the number of trues to the number of falses).  
For example:
```
const lists = [
  [true, true, true, false, false], // 60%
  [true, true, true, true, false], // 80%
  [true, true, true, true, true, true, false, false, false], // 66%
  [true, false, false, false, false, false], // 17%
  [true, true, true, true, true, true, true, true, true, true, true, true, false], // 96%
  [true, false], // 50%
  [true, true, true, true, false, false], // 68%
];
```

**Question**: find the maximum consecutive number of percentages dropping down. For example:  
* List #1 (index) has a success percentage of 80%
* List #2 has a success percentage of 66%
* List #3 has a success percentage of 17%

The consecutive number is 3, and that's the answer.
